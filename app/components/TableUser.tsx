import React from 'react';


interface Users{
  id: string;
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  }
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    },
  };


  const testLoading = (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Example to test loading page');
      }, 1000); 
    });
  };


const TableUser = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:Users[]= await data.json();
  await testLoading();
  return (
    
    <div className="flex flex-col w-full h-screen md:items-center md:justify-center">
      <div className="my-2 -mx-2 sm:-mx-4 lg:-mx-8 overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-header text-white font-sans">
                <tr>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm" >Name</th>
                  <th scope="col" className="hidden sm:table-cell py-3.5 pl-6 pr-3 text-left text-sm">Username</th>
                  <th scope="col" className='hidden md:table-cell py-3.5 pl-6 pr-3 text-left text-sm'>Email</th>
                  <th scope="col" className='hidden lg:table-cell py-3.5 pl-6 pr-3 text-left text-sm'>Phone</th>
                  <th scope="col" className='hidden lg:table-cell py-3.5 pl-6 pr-3 text-left text-sm'>Website</th>
                  <th scope="col" className='py-3.5 pl-6 pr-3 text-left text-sm'>company</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 font-serif'>
                {users.map((user,i) => (
                  <tr key={user.id} className={i%2==0?'bg-white border-b border-rowBorder hover:bg-hover':'bg-rowAlt border-b border-rowBorder hover:bg-hover'}>
                    <td className='w-full max-w-0  whitespace-nowrap pr-3 pl-4 py-4 text-sm font-medium text-textPrimary sm:w-auto sm:pl-6 sm:max-w-none'>
                      {user.name}
                      <dl className='lg:hidden font-normal'>
                            <dt className='sr-only '>Username</dt>
                              <dd  className='sm:hidden text-gray-600 mt-1'>{user.username}</dd>
                            <dt className='sr-only '>Email</dt>
                              <dd  className='md:hidden text-gray-600 mt-1'>{user.email}</dd>
                            <dt className='sr-only '>Phone</dt>
                              <dd  className='lg:hidden text-gray-600 mt-1'>{user.phone}</dd>
                            <dt className='sr-only '>website</dt>
                              <dd  className='lg:hidden text-gray-500 mt-1'>{user.website}</dd>
                           
                      </dl>
                  
                      </td>
                    <td className='hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{user.username}</td>
                    <td className='hidden md:table-cell whitespace-normal px-3 py-4 text-sm text-gray-500'>{user.email}</td>
                    <td className='hidden lg:table-cell whitespace-normal px-3 py-4 text-sm text-gray-500'>{user.phone}</td>
                    <td className='hidden lg:table-cell whitespace-normal px-3 py-4 text-sm text-gray-500'>{user.website}</td>
                    <td className='whitespace-normal px-3 py-4 text-sm text-gray-500'>{user.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableUser;
