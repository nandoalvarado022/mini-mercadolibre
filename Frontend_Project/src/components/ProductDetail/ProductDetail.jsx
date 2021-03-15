import { translate } from "./../../utils";

export default function ProductDetail(props) {
  return <div id="ProductDetail" className="width980">
    <div className="flex">
      <div className="left slider">
        <img src={props.data.general.pictures[0].url} alt="" />
      </div>
      <div className="right">
        <div>
          <div className="status">
            {translate(props.data.general.condition)} - {props.data.general.sold_quantity} vendidos
            </div>
          <h1 className="titleProduct">
            {props.data.general.title}
          </h1>
          <div className="price">
            {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(props.data.general.price)}
          </div>
          <button className="btn-buy">Comprar</button>
        </div>
      </div>
    </div>

    <div className="description">
      <div className="title">Descripción del producto</div>
      {props.data.description.plain_text}
    </div>
  </div>
}