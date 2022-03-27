import React from 'react';
import { Card, CardImg, CardTitle, Button, CardImgOverlay } from 'reactstrap';

const InventoryCard = ({inventoryItems}) => {
    return (
        <div className="row mt-4">{inventoryItems.map(item => 
            <div className="col-xs-12 col-sm-6 col-lg-3"> 
                <Card className="inventoryItem-card mb-3" key={item.id}>
                    <CardImg id="inventoryItem-image" className="inventoryItem-image" top src={item.image} alt={item.name} />
                    <CardImgOverlay id="inventoryItem-overlay" className="inventoryItem-overlay text-center">
                        <div className="inventoryItem-allText">
                            <CardTitle tag="h4" className="inventoryItem-title">{item.name}</CardTitle>
                            <Button className="inventoryItem-btn">View Details</Button>
                        </div>
                    </CardImgOverlay>
                </Card>
            </div>)}
        </div>
    );
};

export default InventoryCard;