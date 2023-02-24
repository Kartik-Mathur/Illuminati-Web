let vaibhav = {
    lastName: 'Sharma',
    age: 19,
    updatePlacementStatus: function(status){
        this.placementStatus = status;
        console.log(this);
        
    }
}

let sakshi = {
    lastName: 'Bansal',
    age: 20,
    updatePlacementStatus: function(status){
        this.placementStatus = status;
        console.log(this);
        
    }
}

vaibhav.updatePlacementStatus("Adobe");
sakshi.updatePlacementStatus("Google");