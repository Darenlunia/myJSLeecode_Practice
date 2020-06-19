/**
 * @param {*} nums 要二分的数组
 * @param {*} target 要查找的数字
 */
function binarySearch(nums,target) {
    let left = 0
    let right = nums.length - 1; // 注意

    while(left <= right) {  // 注意
        let mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid+1 // 注意
        } else if (nums[mid] > target) {
            right = mid-1 // 注意
        }
    }
    return -1;
}