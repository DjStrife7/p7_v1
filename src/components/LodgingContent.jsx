import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Collapsible from "./Utils/Collapse.jsx";

import LodgingList from '../datas/LodgingList.json';


function LodgingContent() {
  const { id } = useParams();
  const currentLodging = LodgingList.find(o => (o.id === id));

  const CollapseDescription = ({ details }) => {
    return (
      <article className='content__block'>
        <Collapsible key={details} title='Description' content={currentLodging.description} />
      </article>
    )
  };

  const CollapseEquipments = () => {
    const [ Equipments, setEquipments ] = useState([]);
    useEffect(() => {
      setEquipments(currentLodging.equipments)
    }, []);


    return (
      <aside className='content__block'>
        <Collapsible key={Equipments} title='Equipements' content={
          <ul className='content__block__list'>
            {Equipments && Equipments.map((equipment) => (
              <li className='content__block__list__item' key={equipment}>{equipment}</li>
            ))}
          </ul>
        }>
        </Collapsible>
      </aside>
    )
  };

  return (
    <section className="content">
      <CollapseDescription details={LodgingList} />
      <CollapseEquipments />
    </section>
  )
};


export default LodgingContent;