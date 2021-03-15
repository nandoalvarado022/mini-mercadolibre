import Link from 'next/link'

export default function Product({ data }) {
    return <Link href={`/items/${data.id}`}>
        <div className="width980 Product">
            <div className="content-image">
                <img src={data.thumbnail} alt="" />
            </div>
            <div>
                <div>
                    <span className="price">${data.price}</span>
                    <img className="ic_shipping" src="/assets/ic_shipping.png" alt="" />
                </div>
                <p className="titleProduct">{data.title}</p>
            </div>
        </div>
    </Link>
}