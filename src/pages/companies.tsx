

type Company = {
  title: string;
  description: string;
};

const Companies = () => {
  const companies: Company[] = [
    { title: 'Company A', description: 'Description for Company A' },
    { title: 'Company B', description: 'Description for Company B' },
    { title: 'Company C', description: 'Description for Company C' },
    { title: 'Company C', description: 'Description for Company C' },
    { title: 'Company C', description: 'Description for Company C' },
    { title: 'Company C', description: 'Description for Company C' },
    { title: 'Company C', description: 'Description for Company C' },
    { title: 'Company C', description: 'Description for Company C' },
    // Add more companies here
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">List of Companies</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <li key={index} className=" bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">{company.title}</h2>
            <p className="text-gray-700">{company.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;
