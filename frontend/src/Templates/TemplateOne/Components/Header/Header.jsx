import React, { useContext } from "react";
import "./Header.scss";
import { TemplateOneContext } from "../../TemplateOne";
import { config } from "../../State/config";

const Header = () => {
  const { state, dispatch } = useContext(TemplateOneContext);
  return (
    <div className="header">
      {config.paths.map((item, index) => {
        return (
          <React.Fragment key={index + 1}>
            <div
              className={`header__step ${index + 1 < state.pageNumber ? "active" : ""} ${index + 1 === state.pageNumber ? "current" : ""}`}
              onClick={() => {}}
            >
              <div>{index + 1}</div>
              <div>
                <span className="header__step__page-name">
                  {item.split("/").at(-1).split("-").join(" ")}
                </span>
              </div>
            </div>
            {index === config.paths.length - 1 || (
              <div
                className={`header__line ${index + 1 < state.pageNumber ? "active" : ""}`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Header;
