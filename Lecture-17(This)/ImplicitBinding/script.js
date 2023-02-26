let vaibhav = {
    lastName: 'Sharma',
    age: 19,
    updatePlacementStatus: function(status){
        console.log(this);
        if(this.age>18){
            this.placement = status;
        }
        else{
            this.placement = 'Not applicable';
        }
    }
}

vaibhav.updatePlacementStatus("Adobe");
console.log(vaibhav)