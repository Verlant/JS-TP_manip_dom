const PRODUCT_LIST = document.querySelector(".product_list");
const SHOPPING_BASKET = document.querySelector(".shopping_basket");
let product_count_obj = { Pomme: 0, Poire: 0, Prune: 0 };

function is_string_in_NodeList(string, node_list) {
  let bool = false;
  node_list.forEach((element) => {
    bool = element.textContent.includes(string);
  });
  return bool;
}

function remove_child_from_NodeList(node, max_length) {
  while (node.childNodes.length > max_length) {
    node.removeChild(node.lastChild);
  }
}

PRODUCT_LIST.childNodes.forEach((element_list) => {
  element_list.addEventListener("click", (e) => {
    const PRODUCT = element_list.textContent;
    const NEW_P = document.createElement("p");

    NEW_P.textContent = PRODUCT;

    if (!is_string_in_NodeList(PRODUCT, SHOPPING_BASKET.childNodes)) {
      SHOPPING_BASKET.appendChild(NEW_P);
      product_count_obj[PRODUCT]++;
    }

    SHOPPING_BASKET.childNodes.forEach((element_basket) => {
      const NEW_SPAN = document.createElement("span");

      const NEW_SPAN_2 = document.createElement("span");
      NEW_SPAN_2.textContent = "X";

      element_basket.append(NEW_SPAN);
      element_basket.append(NEW_SPAN_2);

      remove_child_from_NodeList(element_basket, 3);

      console.log(NEW_SPAN);

      NEW_SPAN.setAttribute("id", PRODUCT);
      const SPAN_PRODUCT = document.querySelector("#" + PRODUCT);

      for (const key in product_count_obj) {
        if (key == PRODUCT) {
          product_count_obj[key]++;
          SPAN_PRODUCT.textContent = product_count_obj[key];
        }
      }
    });
  });
});
