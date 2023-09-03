import "./home.modules.scss";

export const CarrouselTitle = () => {
  return (
    <section className="container">
      <div className="headerRow">
        <div className="groupIcon">
          <span>CELULAR</span>
        </div>
        <div className="groupIcon">
          <span>ACESSÓRIOS</span>
        </div>
        <div className="groupIcon">
          <span>TABLETS</span>
        </div>
        <div className="groupIcon">
          <span>NOTEBOOKS</span>
        </div>
        <div className="groupIcon">
          <span>TVS</span>
        </div>
        <div className="groupIcon">
          <span className="colorSpan">VER TODOS</span>
        </div>
      </div>
    </section>
  );
};
