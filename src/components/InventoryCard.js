import React from 'react';
import { Card, CardImg, CardTitle, Button, CardImgOverlay } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const InventoryCard = ({item}) => {
    
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            key={item.id} 
            className="col-xs-12 col-sm-6 col-lg-3"
        > 
            <Card className="inventoryItem-card mb-3" >
                    <CardImg id="inventoryItem-image" className="inventoryItem-image" top src={item.image} alt={item.name} />
                    <CardImgOverlay id="inventoryItem-overlay" className="inventoryItem-overlay text-center">
                        <div className="inventoryItem-allText">
                            <CardTitle tag="h4" className="inventoryItem-title">{item.name}</CardTitle>
                            <Button className="inventoryItem-btn"onClick={()=> handleClick(`/toys/${item.id}`)}>View Details</Button>
                        </div>
                    </CardImgOverlay>
             </Card>
        </motion.div>
    );
};

export default InventoryCard;
