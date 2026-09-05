let candidate = {
  minSalary: 100000
}
let job = {
  maxSalary:350000
}

function match(candidate, job) {
  // is this job a valid match for the candidate?
   if (!candidate || !job || candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error("Missing salary information");
  }
  
  // 2. Candidate minSalary gets a 10% "wiggle room" discount (multiplied by 0.9)
  return (candidate.minSalary * 0.9) <= job.maxSalary;
}