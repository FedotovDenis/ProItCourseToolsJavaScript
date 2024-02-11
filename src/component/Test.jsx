import React, { useEffect } from "react";

function ComponentWithEffect() {
  useEffect(() => {
    console.log("Компонент змонтувався");

    return () => {
      console.log("Компонент демонтувався");
    };
  }, []);
}

export default ComponentWithEffect;
