import {Button, Card} from "@mui/material";
import "../../assets/css/Product.css";

export const Product = (props) => {
    const handleUpVote = () => {
        props.onVote(props.id);
    }

    return (
        <Card id="Product" sx={{display:"flex"}}>
            <div className='image'>
                <img className="product" src={props.productImageUrl} alt="..."/>
            </div>
            <div className='middle aligned content'>
                <div className='header'>
                    <Button variant="contained" onClick={handleUpVote}>投票</Button>
                    当前票数：{props.votes}
                </div>
                <div className='description'>
                    <a href={props.url}>{props.title}</a>
                    <p>{props.description}</p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img className='ui avatar image' src={props.submitterAvatarUrl} alt="avatar"/>
                </div>
            </div>
        </Card>
    );
}