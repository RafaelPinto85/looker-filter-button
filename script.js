let container;

function create(context, element) {
  container = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "Ocultar vazios";
  button.style.padding = "10px 20px";
  button.style.backgroundColor = "#4285F4";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "4px";
  button.style.cursor = "pointer";

  let ativo = false;

  button.onclick = () => {
    ativo = !ativo;

    const config = {
      type: "FILTER",
      filter: {
        include: ativo
          ? [
              {
                column: "Categoria", // Substitua pelo nome real do campo
                condition: "IS_NOT_NULL"
              }
            ]
          : []
      }
    };

    button.innerText = ativo ? "Mostrar todos" : "Ocultar vazios";
    dscc.sendInteraction(config);
  };

  container.appendChild(button);
  element.appendChild(container);
}

function update(context, settings) {
  // Aqui você pode reagir a mudanças nos dados, se necessário
}
