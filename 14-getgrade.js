// day 14/366
// link challenge: 

function getGrade (s1, s2, s3) {
    const score = (s1 + s2 + s3)/3;
    if (score < 60) return 'F'; 
    if (score < 70) return 'E'; 
    if (score < 80) return 'C'; 
    if (score < 90) return 'B'; 
    return 'A';
}

console.log(getGrade(95,90,93))