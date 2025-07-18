/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
        return init
    }else{
        let val = init; // 0 1 3 6 10
        for(let i = 0; i < nums.length; i++){
            val = fn(val,nums[i])
        }
        return val;
    }
};