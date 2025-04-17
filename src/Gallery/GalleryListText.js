function GalleryListText({ item }) { 
    return (
      <ul>
        {item.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    );
}

export default GalleryListText;