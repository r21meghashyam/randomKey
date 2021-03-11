export default (_,$=Math.random)=>Array(_).fill().map(_=>$().toString(36)[2]).map(_=>$()>0.5?_.toUpperCase():_).join('')
