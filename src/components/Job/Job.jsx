import PropTypes from 'prop-types';
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className=" w-full h-48" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <button className=" text-[#7E90FE] bg-lime-300 px-4 py-2 font-extrabold berder-[1px] border-[#7E90FE] rounded-lg ">
            {remote_or_onsite}
          </button>
          <button className=" text-[#7E90FE] bg-orange-100 px-4 py-2 font-extrabold berder-[1px] border-[#7E90FE] rounded-lg ">
            {job_type}
          </button>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
