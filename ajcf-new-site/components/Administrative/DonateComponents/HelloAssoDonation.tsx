import React from "react";

export const HelloAssoDonation = () => {
  return (
    <section>
      <h1>Faire vos dons en toute sécurité avec Helloasso</h1>
      <iframe
        title="helloAssoDonation"
        id="haWidget"
        allowTransparency
        scrolling="auto"
        src="https://www.helloasso.com/associations/ajcf/formulaires/3/widget"
        style={{ width: "100%", height: "750px", border: "none" }}
        onLoad={() => {
          "window.scroll(0, this.offsetTop)";
        }}
      />
    </section>
  );
};
