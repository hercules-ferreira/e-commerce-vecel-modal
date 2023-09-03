import { Icons } from "../../../components/Icons";
// import "./Categories.module.css";
import styles from "./Categories.module.css"; // Importe corretamente o módulo CSS com um nome (styles)

export const ProductsCategories = () => {
  const items = [
    {
      name: "Tecnologia",
      path: <Icons className="icons" svg="monitorarTabletSmartphone" />,
    },
    {
      name: "Supermercado",
      path: <Icons className="icons" svg="supermercados" />,
    },
    {
      name: "Bebidas",
      path: <Icons className="icons" svg="whiskey" />,
    },
    {
      name: "Ferramentas",
      path: <Icons className="icons" svg="ferramentas" />,
    },
    {
      name: "Saúde",
      path: <Icons className="icons" svg="cuidadosDeSaude" />,
    },
    {
      name: "Esportes e Fitness",
      path: <Icons className="icons" svg="estera" />,
    },
    {
      name: "Moda",
      path: <Icons className="icons" svg="moda" />,
    },
  ];

  return (
    <section className={styles.containerProducts}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${index === 0 ? styles.firstDiv : ""} ${
            index === 0 ? "transparent-bg" : ""
          }`}
        >
          {typeof item.path === "string" ? (
            <img src={item.path} alt="" />
          ) : (
            item.path
          )}
          <p>{item.name}</p>
        </div>
      ))}
    </section>
  );
};
