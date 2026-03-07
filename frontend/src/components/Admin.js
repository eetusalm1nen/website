import React, { useState, useEffect } from 'react';

function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
  const [data, setData] = useState({
    bio: '',
    linkedinUrl: '',
    headerSub: '',
    contactText: '',
    contactSecondary: '',
    projects: [] // Alustetaan tyhjä taulukko projekteille
  });

    const handleLogin = (e) => {
        e.preventDefault();
        const correctPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Väärä salasana");
    }
  };

useEffect(() => {
  fetch('http://localhost:5050/api/content')
    .then(res => res.json())
    .then(dbData => {
      if (dbData) {
        setData({
          bio: dbData.bio || '',
          linkedinUrl: dbData.linkedinUrl || '',
          headerSub: dbData.headerSub || '',
          contactText: dbData.contactText || '',
          contactSecondary: dbData.contactSecondary || '',
          // Kartoitetaan projektit ja varmistetaan kategoria-kenttä
          projects: (dbData.projects || []).map(p => ({
            name: p.name || '',
            description: p.description || '',
            category: p.category || '' 
          }))
        });
      }
    })
    .catch(err => console.error("Haku epäonnistui:", err));
}, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5050/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Kaikki kentät päivitetty!');
    }
  };

  // Funktio uuden tyhjän projektin lisäämiseen
  const addProject = () => {
    setData({
      ...data,
      projects: [...data.projects, { name: '', description: '', link: '', category: '' }]
    });
  };

    if (!isAuthenticated) {
    return (
     <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
        <h3>Syötä salasana</h3>
        <form onSubmit={handleLogin}>
        <input 
            type="password" 
            onChange={(e) => setPasswordInput(e.target.value)} 
            style={{ padding: '10px', borderRadius: '4px', border: 'none', marginRight: '10px' }}
        />
        <button type = "submit">
            Kirjaudu
        </button>
        </form>
    </div>
    );
    }

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', background: '#f9f9f9', borderRadius: '8px' }}>
      <h2>Muokkaa Portfoliota</h2>
      <form onSubmit={handleSave}>
        
        <div style={sectionStyle}>
          <h3>Yleiset tiedot</h3>
          <label>Headerin alaotsikko:</label>
          <input name="headerSub" value={data.headerSub} onChange={handleChange} style={inputStyle} />

          <label>Bio (WhoAmI):</label>
          <textarea name="bio" value={data.bio} onChange={handleChange} style={inputStyle} rows="4" />

          <label>LinkedIn URL:</label>
          <input name="linkedinUrl" value={data.linkedinUrl} onChange={handleChange} style={inputStyle} />
        </div>

        <div style={sectionStyle}>
          <h3>Yhteystiedot (Contact)</h3>
          <label>Pääteksti:</label>
          <textarea name="contactText" value={data.contactText} onChange={handleChange} style={inputStyle} />
          <label>Sivulause:</label>
          <input name="contactSecondary" value={data.contactSecondary} onChange={handleChange} style={inputStyle} />
        </div>

        <div style={sectionStyle}>
          <h3>Projektit</h3>
        {data.projects.map((proj, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', background: '#fff' }}>

            <label>Kategoria:</label>
            <select 
            value={proj.category || ""} 
            onChange={(e) => {
                const newProjects = [...data.projects];

                newProjects[index] = { ...newProjects[index], category: e.target.value };
                setData({ ...data, projects: newProjects });
            }}
            style={inputStyle}
            >
            <option value="">Valitse kategoria</option>
            <option value="Personal">Personal</option>
            <option value="University">University</option>
            <option value="Other">Other</option>
            </select>

            <label>Kuvaus:</label>
            <textarea 
            value={proj.description || ''} 
            onChange={(e) => {
                const newProjects = [...data.projects];
                newProjects[index] = { ...newProjects[index], description: e.target.value };
                setData({ ...data, projects: newProjects });
            }} 
            style={inputStyle} 
            />

            <label>linkki:</label>
              <input 
                type="text" 
                value={proj.url || ''} 
                placeholder="https://..."
                onChange={(e) => {
                  const newProjects = [...data.projects];
                  newProjects[index] = { ...newProjects[index], url: e.target.value };
                  setData({ ...data, projects: newProjects });
                }} 
                style={inputStyle} 
              />
            
            {/* Lisätään poistonappi, jotta saat siivottua testi-datan */}
            <button 
            type="button" 
            onClick={() => {
                const newProjects = data.projects.filter((_, i) => i !== index);
                setData({ ...data, projects: newProjects });
            }}
            style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
            Poista projekti
            </button>
        </div>

          ))}
          <button type="button" onClick={addProject} style={addButtonStyle}>+ Lisää uusi projekti</button>
        </div>

        <button type="submit" style={saveButtonStyle}>Tallenna kaikki muutokset</button>
      </form>
    </div>
  );
}

const inputStyle = { width: '100%', marginBottom: '10px', display: 'block', padding: '8px', boxSizing: 'border-box' };
const sectionStyle = { marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '20px' };
const saveButtonStyle = { padding: '12px 24px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' };
const addButtonStyle = { padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' };

export default Admin;