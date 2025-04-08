import "./Card.css"

interface PlaneteProps {
    name: string;
    imgSrc: string;
}

function Card({name, imgSrc} : PlaneteProps) {
    return (
        <figure>
            <img src={imgSrc} alt={name} />
            <figcaption>
                {name}
            </figcaption>
        </figure>
    )
}

export default Card

// fonction avec input ou tu tape ca exlu certaine planete en fonction des lettres écris