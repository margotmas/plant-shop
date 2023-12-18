import "../styles/Footer.css"

function Footer({ infos }) {

  return (
    <>

      <section className="BackgroundColorFooter">
        <ul className="UlFooter">
          <li className="LiFooter">{infos.FirstName}</li>
        </ul>
      </section>


    </>
  )
}

export default Footer