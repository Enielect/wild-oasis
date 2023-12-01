import { useEffect, useRef } from "react";

function useTouchOutside (setIsOpenName) {
    const ref = useRef();

    useEffect(
      function () {
        function handleClick(e) {
          if (ref.current && !ref.current.contains(e.target)) {
            console.log("ouside modal");
            //eslint-disable-next-line
            setIsOpenName("");
          }
        }
        document.addEventListener("click", handleClick, true);
  
        return () => document.removeEventListener("click", handleClick, true);
      },
      [setIsOpenName]
    );

    return ref;
}

export default useTouchOutside;