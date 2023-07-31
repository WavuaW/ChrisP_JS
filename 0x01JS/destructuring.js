var voxel = {x: 3.6, y: 7.4, z: 6.54};

//old way of destructuring.
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//new way of destructuring
const { x : a, y: b, z : c } = voxel; //this means. get the value of x,y,z from voxel and assign it to a,b,c

