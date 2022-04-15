import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
export const Features = (props) => {
  const data = [
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("file-contract")} />,
      title: "Criar Contratos Inteligentes para solucionar problemas",
      text: "Automatização de funcionalidades na blockchain.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("check-circle")} />,
      title: "Fazer Auditoria de Contratos Inteligentes",
      text: "Garantir a segurança dos contratos inteligentes contra falhas, hacking e exploits.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("file-code")} />,
      title: "Trazer suas ideias de DApps para a realidade",
      text: "Criação de carteiras digitais, corretoras descentralizadas, marketplaces e outras aplicações web3.0.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("globe")} />,
      title: "Encontrar Soluções para o Metaverso",
      text: "Criação de assets e ambientes 3D para diferentes metaversos, games e realidades virtuais.",
    },
  ];
  return (
    <div style={{ padding: "20px" }} id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Com a GoVerse você pode:</h2>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-xs-6 col-md-3"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="icon">{d.icon}</div>
              <h3 className="title">{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
