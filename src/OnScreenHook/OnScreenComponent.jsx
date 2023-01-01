
import { useRef } from "react"
import useOneScreen from "./useOneScreen"

export default function OnScreenComponent() {
  const visibleRef = useRef()
  const visible = useOneScreen(visibleRef, "-100px")
  console.log(visible)
  return (
    <>
      <h1>Hearder 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        corrupti a voluptates voluptatibus accusantium ab non temporibus
        doloremque fugit sint! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Accusantium, ipsam, rem consectetur sunt harum rerum
        ullam placeat, nostrum qui ad unde hic? Ut eum officiis ipsa beatae a
        voluptate ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Minima assumenda, consequatur eum atque laborum soluta fugiat
        delectus officia quod excepturi perspiciatis nihil voluptatibus natus
        quia! Alias, numquam quidem sapiente animi iusto laboriosam dicta ipsa
        blanditiis vero necessitatibus porro, velit ratione facere eos eius quis
        vitae exercitationem vel dolor asperiores ducimus temporibus est
        incidunt natus. Architecto eveniet asperiores provident, iste maxime
        harum. Non, corporis enim vero harum repellendus architecto earum iusto
        eaque quas odit deleniti vitae maiores, molestiae aspernatur sunt quam
        aliquam facere alias. In error vel earum a, magnam id quod dolore? Quia
        at nisi, earum quibusdam voluptatum eius libero?Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Deserunt repudiandae ipsa obcaecati
        facilis provident eveniet, temporibus nostrum nesciunt repellendus,
        doloribus culpa ipsum quibusdam adipisci laboriosam perferendis deleniti
        et enim quidem beatae quis. Excepturi hic inventore aliquid vitae libero
        saepe? Hic pariatur officiis, nulla voluptates est impedit suscipit unde
        asperiores sit. Quo facilis vitae possimus? Ducimus est explicabo
        reprehenderit corrupti ea neque laboriosam eius, sunt deleniti natus
        fuga quod vel, aliquid quo a recusandae consequatur et perspiciatis
        cupiditate rerum voluptatibus labore. Vitae iste tempore pariatur
        molestiae tempora porro repudiandae, voluptatibus expedita. Rem
        dignissimos voluptates odit nam, consequuntur quibusdam dolore minus,
        laboriosam ab aspernatur quod incidunt! Facilis, dolores id veritatis
        quod temporibus cumque beatae sit nulla saepe! Tempora perferendis velit
        mollitia temporibus nobis quibusdam sunt esse alias nisi fugit corporis
        voluptatum voluptate, inventore quaerat fuga aut laudantium amet culpa
        magni! Vitae, alias? Sequi, excepturi! Provident ex porro similique at
        nihil dolore asperiores! Iusto praesentium, commodi iste sit repellendus
        fuga ex repellat harum illum consectetur id laborum sed voluptatem
        saepe, dicta dolorem sint? Et aliquam a error nobis corporis dolore
        deleniti rem optio itaque alias. Ratione, maxime expedita distinctio
        suscipit obcaecati repellendus! Ipsum architecto molestias fuga iure
        expedita culpa doloribus? Similique quod tenetur, velit cumque harum ea
        tempora, quos, alias architecto veritatis delectus aliquid quo quia ipsa
        maxime accusantium. Sed rem est possimus autem aliquid vel ipsum fugit
        reprehenderit assumenda quidem quasi, magnam voluptatibus repellat
        omnis? Cupiditate neque asperiores provident ipsum voluptates excepturi
        magnam deserunt eum, ratione ut eos quasi culpa vitae laborum dolor
        aspernatur nam maiores ea molestias accusamus dolorum soluta delectus?
        Possimus accusamus ducimus, vero voluptas impedit aspernatur. Asperiores
        perferendis aliquam nemo maxime provident perspiciatis nesciunt unde
        repellendus, fugiat consequuntur cum neque dignissimos a sunt sapiente?
        Soluta exercitationem rerum porro in numquam consectetur expedita
        mollitia, accusantium, recusandae neque quaerat fuga dicta.
      </p>
      <h1 ref={visibleRef}> Header 2 {visible ? "(Visible)":""}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        corrupti a voluptates voluptatibus accusantium ab non temporibus
        doloremque fugit sint! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Accusantium, ipsam, rem consectetur sunt harum rerum
        ullam placeat, nostrum qui ad unde hic? Ut eum officiis ipsa beatae a
        voluptate ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Minima assumenda, consequatur eum atque laborum soluta fugiat
        delectus officia quod excepturi perspiciatis nihil voluptatibus natus
        quia! Alias, numquam quidem sapiente animi iusto laboriosam dicta ipsa
        blanditiis vero necessitatibus porro, velit ratione facere eos eius quis
        vitae exercitationem vel dolor asperiores ducimus temporibus est
        incidunt natus. Architecto eveniet asperiores provident, iste maxime
        harum. Non, corporis enim vero harum repellendus architecto earum iusto
        eaque quas odit deleniti vitae maiores, molestiae aspernatur sunt quam
        aliquam facere alias. In error vel earum a, magnam id quod dolore? Quia
        at nisi, earum quibusdam voluptatum eius libero?Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Deserunt repudiandae ipsa obcaecati
        facilis provident eveniet, temporibus nostrum nesciunt repellendus,
        doloribus culpa ipsum quibusdam adipisci laboriosam perferendis deleniti
        et enim quidem beatae quis. Excepturi hic inventore aliquid vitae libero
        saepe? Hic pariatur officiis, nulla voluptates est impedit suscipit unde
        asperiores sit. Quo facilis vitae possimus? Ducimus est explicabo
        reprehenderit corrupti ea neque laboriosam eius, sunt deleniti natus
        fuga quod vel, aliquid quo a recusandae consequatur et perspiciatis
        cupiditate rerum voluptatibus labore. Vitae iste tempore pariatur
        molestiae tempora porro repudiandae, voluptatibus expedita. Rem
        dignissimos voluptates odit nam, consequuntur quibusdam dolore minus,
        laboriosam ab aspernatur quod incidunt! Facilis, dolores id veritatis
        quod temporibus cumque beatae sit nulla saepe! Tempora perferendis velit
        mollitia temporibus nobis quibusdam sunt esse alias nisi fugit corporis
        voluptatum voluptate, inventore quaerat fuga aut laudantium amet culpa
        magni! Vitae, alias? Sequi, excepturi! Provident ex porro similique at
        nihil dolore asperiores! Iusto praesentium, commodi iste sit repellendus
        fuga ex repellat harum illum consectetur id laborum sed voluptatem
        saepe, dicta dolorem sint? Et aliquam a error nobis corporis dolore
        deleniti rem optio itaque alias. Ratione, maxime expedita distinctio
        suscipit obcaecati repellendus! Ipsum architecto molestias fuga iure
        expedita culpa doloribus? Similique quod tenetur, velit cumque harum ea
        tempora, quos, alias architecto veritatis delectus aliquid quo quia ipsa
        maxime accusantium. Sed rem est possimus autem aliquid vel ipsum fugit
        reprehenderit assumenda quidem quasi, magnam voluptatibus repellat
        omnis? Cupiditate neque asperiores provident ipsum voluptates excepturi
        magnam deserunt eum, ratione ut eos quasi culpa vitae laborum dolor
        aspernatur nam maiores ea molestias accusamus dolorum soluta delectus?
        Possimus accusamus ducimus, vero voluptas impedit aspernatur. Asperiores
        perferendis aliquam nemo maxime provident perspiciatis nesciunt unde
        repellendus, fugiat consequuntur cum neque dignissimos a sunt sapiente?
        Soluta exercitationem rerum porro in numquam consectetur expedita
        mollitia, accusantium, recusandae neque quaerat fuga dicta.
      </p>
    </>
  )
}
