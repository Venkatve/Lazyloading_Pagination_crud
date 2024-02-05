import React,{ useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import "./LazyLoading.css";
const style = {
  border: "1px solid blue",
  margin: 50,
  padding: 10
};

const Source = [
  {
      "id":1,
      "name":"James",
      "email":"James@gmail.com"
  },{
      "id":2,
      "name":"Robert",
      "email":"Robert@gmail.com"
  },{
      "id":3,
      "name":"John",
      "email":"John@gmail.com"
  },{
      "id":4,
      "name":"Michael",
      "email":"Michael@gmail.com"
  },{
      "id":5,
      "name":"David",
      "email":"David@gmail.com"
  },{
      "id":6,
      "name":"William",
      "email":"William@gmail.com"
  },{
      "id":7,
      "name":"Richard",
      "email":"Richard@gmail.com"
  },{
      "id":8,
      "name":"Joseph",
      "email":"Joseph@gmail.com"
  },{
      "id":9,
      "name":"Thomas",
      "email":"Thomas@gmail.com"
  },{
      "id":10,
      "name":"Christopher",
      "email":"Christopher@gmail.com"
  },{
      "id":11,
      "name":"Charles",
      "email":"Charles@gmail.com"
  },{
      "id":12,
      "name":"Daniel",
      "email":"Daniel@gmail.com"
  },{
      "id":13,
      "name":"Matthew",
      "email":"Matthew@gmail.com"
  },{
      "id":14,
      "name":"Anthony",
      "email":"Anthony@gmail.com"
  },{
      "id":15,
      "name":"Mark",
      "email":"Mark@gmail.com"
  },{
      "id":16,
      "name":"Donald",
      "email":"Donald@gmail.com"
  },{
      "id":17,
      "name":"Steven",
      "email":"Steven@gmail.com"
  },{
      "id":18,
      "name":"Andrew",
      "email":"Andrew@gmail.com"
  },{
      "id":19,
      "name":"Paul",
      "email":"Paul@gmail.com"
  },{
      "id":20,
      "name":"Kevin",
      "email":"Kevin@gmail.com"
  },{
      "id":21,
      "name":"Brian",
      "email":"Brian@gmail.com"
  },{
      "id":22,
      "name":"George",
      "email":"George@gmail.com"
  },{
      "id":23,
      "name":"Timothy",
      "email":"Timothy@gmail.com"
  },{
      "id":24,
      "name":"Ronald",
      "email":"Ronald@gmail.com"
  }]

  const LazyLoading = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 4 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if(dataSource.length < 25){
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 4 })));
      }, 1000);
    }else{
      setHasMore(false);
    }
    
  };

  return (
    <div className="Apps">
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h3>Loading ...</h3>}
        endMessage={<h3>You are all set!</h3>}
      >
        {dataSource.map((_, index) => {
         
          const sourceItem = Source[index];
          if (sourceItem) {
            return (
              <div key={index} style={style}>
              
                <p>ID: {sourceItem.id}</p>
                <p>Name: {sourceItem.name}</p>
                <p>Email: {sourceItem.email}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </InfiniteScroll>
    </div>
  );
}




export default LazyLoading;