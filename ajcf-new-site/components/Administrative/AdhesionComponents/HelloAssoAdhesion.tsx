import React from "react";

export const HelloAssoAdhesion = () => {
  return (
    <section>
      <h1>Adhérer en toute sécurité avec Helloasso</h1>
      <iframe
        title="helloAssoAdhesion"
        id="haWidget"
        allowTransparency
        scrolling="auto"
        src="https://www.helloasso.com/associations/ajcf/adhesions/adhesion/widget"
        style={{ width: "100%", height: "750px", border: "none" }}
        onLoad={() => {
          "window.scroll(0, this.offsetTop)";
        }}
      />
      <div style={{ width: "100%", textAlign: "center" }}>
        Propulsé par{" "}
        <a href="https://www.helloasso.com" rel="nofollow">
          HelloAsso
        </a>
      </div>
    </section>
  );
};
