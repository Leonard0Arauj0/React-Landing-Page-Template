import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
export const Services = (props) => {
  const data = [
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("file-code")} />,
      name: "Web3.0 DApps",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("file-contract")} />,
      name: "Criação de Smart Contracts",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("globe")} />,
      name: "Soluções para o Metaverso",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("check-circle")} />,
      name: "Auditoria de Smart Contracts",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("sync-alt")} />,
      name: "Tokenomics",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      icon: <FontAwesomeIcon className="fa" icon={solid("share-alt")} />,
      name: "NFT Collections",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              key={`${d.name}-${i}`}
              className="col-md-4"
            >
              {" "}
              <div className="icon">{d.icon}</div>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
