import Breadcrumb from '../breadcrumb/Breadcrumb'
import Header from '../header/Header'

export default function Wrapper(props) {
  return (<div id="Wrapper">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
    <main>
      <Header />
      {props?.children && <Breadcrumb />}
      {props.children}
    </main>
  </div>
  )
}