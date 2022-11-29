import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function FishCard(props) {

var cardStyle = {
    display: 'display',
    height: '75vh',
    position: 'relative'
}

    return(
        <div class="item">
            <Card sm={{ maxWidth: 450 }} style={cardStyle}>
                <CardMedia
                    height="auto"
                    image={"./images/"+props["file-name"]+".png"}
                    component="img" 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name.en}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props["museum-phrase"]}
                    </Typography>
                    <div style={{height:'auto'}}></div>
                    <Typography variant="body2" color="text.secondary" style={{position:'absolute', bottom:'0px'}}>
                        Rarity: {props["availability"]["rarity"]}
                        <br />Location: {props["availability"]["location"]}
                        <br />Price: {props.price}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}