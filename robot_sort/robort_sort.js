class SortingRobot {
    //SortingRobot takes a list and sorts it
    constructor(list){
        this.list = list;
        this.item = null;
        this.postiion = 0;
        this.light = 'OFF';
        this.time = 0;
    }
    
    can_move_right (){
        /**
         *  Returns True if the robot can move right or False if it's at the start of the list.
         */
        return this.postiion < self.list.length - 1
    }
    
    can_move_left (){
        /**
         *  Returns True if the robot can move left or False if it's at the start of the list.
         */
        return this.postiion > 0;
    }
    
    move_right(){
        /**
         * If the robot can move to the right, it moves to the right and
         * returns True. Otherwise, it stays in place and returns False.
         * This will increment the time counter by 1.
         */
        this.time += 1;
        if(this.postiion < this.list.length -1){
            this.postiion += 1;
            return true;
        } 
        return false;
    }
    
    move_left (){
        /**
         * f the robot can move to the left, it moves to the left and 
         * returns True. Otherwise, it stays in place and returns False.
         * This will increment the time counter by 1.
         */
        this.time += 1;
        if(this.postiion > 0){
            this.postiion -= 1;
            return true;
        } 
        return false;
    }
    
    swap_item(){
        /**
         * The robot swaps its currently held item with the list item in front
         * of it.
         * This will increment the time counter by 1.
         */
        this.time += 1
        //Swap the held item with the list item at the robot's position
        let item = this.list[this.postiion];
        
        this.list[this.postiion] = this.item;
        this.item = item;
    }
    
    compare_item(){
        /**
         *  Compare the held item with the item in front of the robot:
         *         If the held item's value is greater, return 1.
         *         If the held item's value is less, return -1.
         *         If the held item's value is equal, return 0.
         *         If either item is None, return None.
         */
        if(this.item === null || this.list[this.postiion] === null){
            return null;
        } else if (this.item > this.list[this.postiion]){
            return 1
        } else if(this.item < this.list[this.postiion]){
            return -1
        } else {
            return 0
        }
    }
    
    set_light_on(){
        // Turn on the robot's light
        this.light = 'ON'
    }
    
    set_light_off(){
        // Turn off the robot's light
        this.light = 'OFF'
    }
    
    light_is_on(){
        // Returns True if the robot's light is on and False otherwise.
        return this.light === 'ON'
    }
    
    sort(){
        //Sort the robot's list
        //your code here
        return 
    }
}

module.exports = {SortingRobot}