type Props = {
  choreName: string
}

const Title= ( {choreName}:Props ) => {
  const handleRename = () => {
    console.log('double clicked');
  };
  return (
    <div>
      <h3
        onDoubleClick={handleRename}
        // onClick={handleRename}
        className='chore-name'
      >
        {choreName}
      </h3>
    </div>
  );
};

export default Title;
