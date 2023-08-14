import classes from "./choiceBased.module.css"

const ChoiceBased= ()=>{
    return (
        <section>
            <label className={classes.color}>Color</label>
            <select className={classes.colorSelection}>
            <option>pink</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Purple</option>
            </select>
            <label className={classes.brand}>Brand</label>
            <select className={classes.brandSelection}>
            <option>H&M</option>
            <option>Gucci</option>
            <option>Louis Vuitton</option>
            <option>HermesPrada</option>
            <option>Balenciaga</option>
            </select>
            <label className={classes.type}>Type</label>
            <select className={classes.typeSelection}>
            <option>Jeans</option>
            <option>Top</option>
            <option>Jewellary</option>
            <option>Shoes</option>
            <option>Goggles</option>
            </select>
        </section>
    )
}

export default ChoiceBased;