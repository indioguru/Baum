import React from "react";

const HomeTickets = () => {
  return (
    <div className="tickets">
      <div className="tickets_content">
        <h1>Entradas</h1>
        <div className="content_table_tickets">
          <p className="backstage">
            Combos Backstage: <span>$3.000.000 + servicio</span>{" "}
          </p>

          <div className="content_combs">
            <div className="comboVip">
              <p>Combos VIP:</p>
              <p>
                Etapa 1 <span> $599.000 + servicio</span>
              </p>

              <p>
                Etapa 2 <span> $629.000 + servicio</span>
              </p>
            </div>

            <div className="comboGeneral">
              <p>Combos General:</p>
              <p>
                Etapa 1 <span>$399.000 + servicio</span>
              </p>
              <p>
                Etapa 2 <span> $429.000 + servicio</span>
              </p>
            </div>
          </div>
        </div>

        <div className="content_button">
          <a
            target="_blank"
            href="https://www.entradasamarillas.com/event/baum-festival-2023"
          >
            <button>Ver entradas</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTickets;
