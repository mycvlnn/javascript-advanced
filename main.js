const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const carListElement = $("#car-list");
const btnAdd = $("button");
const inputElemnet = $("input");

const app = (() => {
  return {
    cars: [],
    add(carName) {
      this.cars.push(carName);
    },
    deleteCar(index) {
      this.cars.splice(index, 1);
    },
    render() {
      const html = this.cars
        .map((car, index) => {
          return `<li>
                    ${car}
                    <span class="delete" data-index=${index}>&times</span>
                </li>`;
        })
        .join("");

      carListElement.innerHTML = html;
    },
    handleDelete(e) {
      const deleteElement = e.target.closest(".delete");
      if (deleteElement) {
        const index = deleteElement.dataset.index;
        this.deleteCar(index);
        this.render();
      }
    },
    init() {
      // Lắng nghe sự kiện
      // 1. add
      btnAdd.onclick = () => {
        const valueInput = inputElemnet.value;
        console.log("hihih");
        this.add(valueInput);
        this.render();
      };

      // 2. delete
      carListElement.onclick = this.handleDelete.bind(this);

      this.render();
    },
  };
})();

app.init();
