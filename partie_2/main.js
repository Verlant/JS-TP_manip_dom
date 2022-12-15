const PRODUCT_LIST = document.querySelector(".product_list");
const SHOPPING_BASKET = document.querySelector(".shopping_basket");
let product_count_obj = { Pomme: 0, Poire: 0, Prune: 0 };
let product_price_obj = { Pomme: 2, Poire: 3, Prune: 1 };
let total = 0;

/**
 * Renvoie true si la chaine de caractère est présent dans l'un des enfant du noeud, renvoie false si non
 * @param {string} string
 * @param {nodeList} node_list
 * @returns bool
 */
function is_string_in_NodeList(string, node_list) {
  let bool = false;
  node_list.forEach((element) => {
    if (element.textContent.includes(string)) {
      bool = true;
    }
  });
  return bool;
}

/**
 * Supprime les derniers enfants jusqu'a arrivé a la limite de nombre d'enfants (max_length)
 * @param {node} node
 * @param {int} max_length
 */
function remove_child_from_NodeList(node, max_length) {
  while (node.childNodes.length > max_length) {
    node.removeChild(node.lastChild);
  }
}

PRODUCT_LIST.childNodes.forEach((element_list) => {
  element_list.addEventListener("click", (e) => {
    const TOTAL_DIV = document.querySelector("#total");
    const PRODUCT = element_list.textContent.split(" ")[0];
    const NEW_P = document.createElement("p");

    NEW_P.textContent = PRODUCT;

    if (!is_string_in_NodeList(PRODUCT, SHOPPING_BASKET.childNodes)) {
      SHOPPING_BASKET.appendChild(NEW_P);
    }

    SHOPPING_BASKET.childNodes.forEach((element_basket) => {
      const NEW_SPAN = document.createElement("span");

      const NEW_SPAN_2 = document.createElement("span");
      NEW_SPAN_2.textContent = "X";

      element_basket.append(NEW_SPAN);
      element_basket.append(NEW_SPAN_2);

      remove_child_from_NodeList(element_basket, 3);

      NEW_SPAN.setAttribute("id", PRODUCT);
    });

    for (let key in product_count_obj) {
      if (key == PRODUCT) {
        const SPAN_PRODUCT = document.querySelector("#" + PRODUCT);
        product_count_obj[key]++;
        SPAN_PRODUCT.textContent =
          " " +
          product_count_obj[key] +
          " x " +
          product_price_obj[key] +
          " € " +
          " = " +
          product_count_obj[key] * product_price_obj[key] +
          " ";
      }
    }

    const DELETE_SPAN = document.querySelectorAll("span:nth-of-type(even)");

    DELETE_SPAN.forEach((element) => {
      element.addEventListener("click", (e) => {
        element.parentNode.remove();
        product_count_obj[element.parentNode.textContent.split(" ")[0]] = 0;
        total =
          product_count_obj["Pomme"] * product_price_obj["Pomme"] +
          product_count_obj["Poire"] * product_price_obj["Poire"] +
          product_count_obj["Prune"] * product_price_obj["Prune"];
        TOTAL_DIV.textContent = "Total = " + total + " €";
      });
    });
    total =
      product_count_obj["Pomme"] * product_price_obj["Pomme"] +
      product_count_obj["Poire"] * product_price_obj["Poire"] +
      product_count_obj["Prune"] * product_price_obj["Prune"];

    TOTAL_DIV.textContent = "Total = " + total + " €";
  });
});
