import React, { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} / Sinima`;
  });
  return null;
}

export default useTitle;
