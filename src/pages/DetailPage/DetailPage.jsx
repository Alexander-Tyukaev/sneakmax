import React from "react"
import { useParams } from "react-router-dom";

const DetailPage = () => {

    const params = useParams()
    let sneakId = params.id
  return (
    <div>
      Detail page {sneakId} sneak
 os{}    </div>
  )
};

export default DetailPage;
