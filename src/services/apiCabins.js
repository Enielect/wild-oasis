import { toast } from "react-hot-toast";
import { supabase, supabaseUrl } from "./supabase";

const bucketUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images`;


export async function getCabin() {
  let { data, error } = await supabase.from("Cabins").select("*");
  if (error) throw new Error("Cabins not found");
  console.log(data);
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    toast.error(error.message);
  } else {
    toast.success("Cabin was successfully deleted");
  }
}

export async function createEditCabin(newCabin, id) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name?.replaceAll(
    "/",
    ""
  )}`;

  const imagePath = hasImage ? newCabin.image : `${bucketUrl}/${imageName}`;

  //const imagePath = `${bucketUrl}/${imageName}`;

  //1) setting up the query
  let query = supabase.from("Cabins");

  //updating the cabin
  if (id) {
    query = query
      .update({
        ...newCabin,
        image: imagePath,
      })
      .eq("id", id);
  } else {
    //inserting a new cabin
    query = query.insert([
      {
        ...newCabin,
        image: imagePath,
      },
    ]);
  }

  const { data, error } = await query.select().single();

  if (hasImage) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //delete cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    toast.error("There was an error uploading the image");

    throw new Error(
      "There was a problem uploading the cabin due to an unsuccessful upload of the image"
    );
  }

  if (error) {
    toast.error("There was a problem uploading the cabin");
  } else {
    toast.success("cabin was successfully created");
  }
  return data;
}

// export async function uploadFile(newCabin) {
//   const bucketUrl = `https://bcghnuqlnearmepwjmwd.supabase.co/storage/v1/object/public/cabin-images`;

//   const imageName = `${Math.random()}-${newCabin.image.name.replaceAll(
//     "/",
//     ""
//   )}`;

//   const imagePath = `${bucketUrl}/${imageName}`;

//   const { data, error } = await supabase.storage
//     .from("cabin images")
//     .upload(imagePath);

//   if (error) {
//     // Handle error
//     console.error("Error: " + error);
//   } else {
//     // Handle success
//     console.log("Image was successfully uploades");
//   }
//   return data;
// }

//image url

//'cabin-001.jpg'
//https://<your-project-id>.supabase.co/storage/v1/b/<your-bucket-name>/o/<encoded-file-name>
