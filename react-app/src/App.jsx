import { useState, useEffect } from 'react';
import './index.css';

function getStored(key, defaultValue) {
  const saved = localStorage.getItem(key);
  try {
    return saved ? JSON.parse(saved) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export default function App() {
  const [items, setItems] = useState(() => getStored('items', []));
  const [settings, setSettings] = useState(() => getStored('settings', {
    cardSize: 150,
    borderRadius: 7,
    imageGap: 15,
    cardBackground: '#26292f',
    textColor: '#b0bac5',
    backgroundImage: 'https://i.imgur.com/ukZ8NJu.png',
    backgroundColor: '#16181c'
  }));

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  const addItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const newItem = {
      id: Date.now(),
      title: form.title.value || 'Невідомо',
      image: form.image.value || 'https://i.imgur.com/klcspz6.png',
      translated: Math.min(100, Math.max(0, Number(form.translated.value) || 0)),
      approved: Math.min(100, Math.max(0, Number(form.approved.value) || 0))
    };
    setItems([...items, newItem]);
    form.reset();
  };

  const updateItem = (id, field, value) => {
    // Обмежуємо значення approved та translated до максимуму 100
    if (field === 'approved' || field === 'translated') {
      value = Math.min(100, Math.max(0, value));
    }
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const copyText = () => {
    const text = items.map(it => `${it.title}: ${it.translated}%✏️ ${it.approved}%✅`).join('\n');
    navigator.clipboard.writeText(text);
  };

  const handleSettingChange = (e) => {
    const { name, value } = e.target;
    setSettings(s => ({ ...s, [name]: value }));
  };

  return (
    <div className="min-h-screen p-4" style={{backgroundColor: settings.backgroundColor, backgroundImage: `url(${settings.backgroundImage})`, backgroundSize:'cover'}}>
      <h1 className="text-center text-xl text-white mb-4">PatsiukUI React</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <form onSubmit={addItem} className="bg-[#26292f] p-4 rounded text-white w-72 flex flex-col gap-2">
          <label className="text-sm">Назва:</label>
          <input name="title" className="p-1 rounded text-black" />
          <label className="text-sm">Посилання на зображення:</label>
          <input name="image" className="p-1 rounded text-black" />
          <label className="text-sm">✏️ Перекладено:</label>
          <input name="translated" type="number" min="0" max="100" defaultValue="0" className="p-1 rounded text-black" />
          <label className="text-sm">✅ Затверджено:</label>
          <input name="approved" type="number" min="0" max="100" defaultValue="0" className="p-1 rounded text-black" />
          <button type="submit" className="bg-[#7e292a] rounded p-2 mt-2">Додати</button>
        </form>

        <div className="bg-[#26292f] p-4 rounded text-white w-72 flex flex-col gap-2">
          <label className="text-sm">Розмір карточок:</label>
          <input type="range" name="cardSize" min="100" max="246" value={settings.cardSize} onChange={handleSettingChange} />
          <label className="text-sm">Скруглення карточки:</label>
          <input type="range" name="borderRadius" min="3" max="35" value={settings.borderRadius} onChange={handleSettingChange} />
          <label className="text-sm">Відступ між карточками:</label>
          <input type="range" name="imageGap" min="5" max="50" value={settings.imageGap} onChange={handleSettingChange} />
          <label className="text-sm">Колір карточок:</label>
          <input type="color" name="cardBackground" value={settings.cardBackground} onChange={handleSettingChange} />
          <label className="text-sm">Колір тексту:</label>
          <input type="color" name="textColor" value={settings.textColor} onChange={handleSettingChange} />
          <label className="text-sm">Фон (лінк на зображення):</label>
          <input name="backgroundImage" className="p-1 rounded text-black" value={settings.backgroundImage} onChange={handleSettingChange} />
          <label className="text-sm">Колір фону:</label>
          <input type="color" name="backgroundColor" value={settings.backgroundColor} onChange={handleSettingChange} />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4" style={{gap: `${settings.imageGap}px`}}>
        {items.map(item => (
          <div key={item.id} className="p-2" style={{width: settings.cardSize+'px'}}>
            <div className="flex flex-col" style={{backgroundColor: settings.cardBackground,borderRadius: settings.borderRadius+'px',color:settings.textColor}}>
              <div className="flex justify-between p-2">
                <input value={item.title} onChange={e=>updateItem(item.id,'title',e.target.value)} className="bg-transparent border-b flex-grow" />
                <button onClick={()=>removeItem(item.id)} className="ml-2 text-white bg-[#7e292a] px-2 rounded">X</button>
              </div>
              <div className="w-full h-24 bg-cover" style={{backgroundImage:`url(${item.image})`,borderRadius: settings.borderRadius+'px'}}></div>
              <div className="p-2">
                <div className="bg-[#16181c] h-2 rounded" style={{borderRadius: settings.borderRadius+'px'}}>
                  <div className="bg-blue-500 h-2" style={{width:`${item.translated}%`, borderRadius: settings.borderRadius+'px'}}></div>
                  <div className="bg-green-500 h-2 -mt-2" style={{width:`${item.approved}%`, borderRadius: settings.borderRadius+'px'}}></div>
                </div>
                <div className="text-center mt-1 text-sm">{item.translated}% ✏️ {item.approved}% ✅</div>
                <div className="flex gap-2 mt-1">
                  <input type="number" min="0" max="100" value={item.translated} onChange={e=>updateItem(item.id,'translated',Number(e.target.value))} className="p-1 rounded text-black w-full" />
                  <input type="number" min="0" max="100" value={item.approved} onChange={e=>updateItem(item.id,'approved',Number(e.target.value))} className="p-1 rounded text-black w-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button onClick={copyText} className="bg-[#7e292a] text-white rounded px-4 py-2">Скопіювати записи</button>
      </div>
    </div>
  );
}
