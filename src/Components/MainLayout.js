import React, { useState } from "react";
import { Input, Button, Layout, Menu, Dropdown , Result } from "antd";
import { SearchOutlined, DownOutlined ,UnorderedListOutlined,AppstoreAddOutlined,NodeIndexOutlined,UpSquareOutlined,PlusCircleOutlined,OneToOneOutlined,DribbbleOutlined,PoweroffOutlined} from "@ant-design/icons";
import CustomForm from "./assets/Form";
import Affichage from "./assets/Affichage";
import Dashboard from "./Dashbord/Dashbord";
import ListScan from "./Workflow/Addlist";
import Showengine from "./Workflow/Showengine";
import AddScan from "./Scan/AddScan";
import Affichescan from "./Scan/Affichescan";
import AddFinding from "./Finding/AddFinding";
import ManualFinding from "./Finding/Manualimport";
import Afficheticks from "./Tickets/AffhicheTickets";
import AddFindingStep2 from "./Finding/AddFindingStep2";
import AddFindingStep3 from "./Finding/AddFindingStep3";
import { useSpring, animated,config  } from 'react-spring';
import Addowner from "./assets/AddOwner";
import Affichageowner from "./assets/AffichageOwner";
import Addengine from "./Engines/Addengine";
import Addpolicy from "./Engines/Addpolicy";
import Addenginetype from "./Engines/Addenginetype";
import Scanpolicy from "./Engines/Scanenginepolicy";
import EnginessScan from "./Engines/Scanengineshow";
import Scanenginestypes from "./Engines/Scanenginetype";
import logo from '../assets/Log.png'



const { Header, Content } = Layout;

const MainLayout = () => {
  //changer color de link
  const [isBlue, setIsBlue] = useState(false);
  const [isBlueasset, setIsBlueassets] = useState(false);
  const [isBlueworkflow, setIsBlueworkflow] = useState(false);
  const [isBlueEngine, setIsBlueEngine] = useState(false);

//color finding
  const handleClick = () => {
    setIsBlue(!isBlue);
  };
  
  //color assets
  const handleClickassets = () => {
    setIsBlueassets(!isBlueasset);
  };

  //color Workflow
  const handleClickworkflow = () => {
    setIsBlueworkflow(!isBlueworkflow);
  };
  //color engine

    const handleClicEngine= () => {
      setIsBlueEngine(!isBlueEngine);
  };


  const [findingAddedSuccess, setFindingAddedSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true); // État pour gérer la connexion

  const handleLogout = () => {
    // Déconnexion : Mettre à jour l'état d'authentification
    setIsLoggedIn(false);
  };
  
  const [showContents, setShowContents] = useState({
    addFinding: false,
    manualFinding: false,
    
    // Ajoutez d'autres états pour les autres contenus
  });
  

  const handleAddFindingStep3Finish = (values) => {

    setFindingAddedSuccess(true);
    setShowSuccessMessage(true); // Afficher le message et l'image "OK"
    setddfinding(false); // Cacher le formulaire après la soumission
    setShowContents({ showContents, addFinding: false }); // Cacher le formulaire après la soumission
  };

  const toggleAddFinding = () => {
    setddfinding(!addfinding); // Cette ligne contrôle l'affichage du formulaire d'ajout
    setShowContents({ ...showContents, addFinding: !showContents.addFinding }); // Cette ligne contrôle l'affichage du sous-menu "Add Finding"
  };

  const toggleManualFinding = () => {
    setmanualfinding(!manualfinding); // Contrôle l'affichage du composant ManualFinding
    setShowContents({ ...showContents, manualFinding: !showContents.manualFinding }); // Contrôle l'affichage du sous-menu "Manual import"
    setShowSuccessMessage(false);
  };


    // Animation pour le cercle bleu
  const blueCircleAnimation = useSpring({
    opacity: showSuccessMessage ? 1 : 0, // Afficher le cercle si showSuccessMessage est vrai
    from: { opacity: 0 },
    config: config.molasses, // Animation plus lente
  });

  // Animation pour le coche blanc
  const checkmarkAnimation = useSpring({
    opacity: showSuccessMessage ? 1 : 0, // Afficher le coche si showSuccessMessage est vrai
    from: { opacity: 0 },
    delay: 250, // Délai de 500 ms après l'animation du cercle
    config: config.wobbly, // Animation plus rebondissante
  });

  
  
  const [showForm, setShowForm] = useState(false);
  const [showAssetsGroup, setShowAssetsGroup] = useState(false);
  const [showdash, setShowdash] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [showengine, setShowengine] = useState(false);
  const [addscan, setaddscan] = useState(false);
  const [affichescan, setaffichescan] = useState(false);
  const [addfinding, setddfinding] = useState(false);
  const [manualfinding, setmanualfinding] = useState(false);
  const [tickets, setticket] = useState(false);
  const [addowner, setAddOwner] = useState(false);
  const [displayowner, setDisplayOwner] = useState(false);
  const [addengine, setaddengine] = useState(false);
  const [addpolicy, setaddpolicy] = useState(false);
  const [addenginetype, setaddenginetype] = useState(false);
  const [displayengine, setDisplayengine] = useState(false);
  const [Scanengineshows, setScanengineshows] = useState(false);
  const [showtype, setshowtype] = useState(false);








  //engines
  const toggleshowengine = () => {
    setShowengine(!showengine);
    setShowScan(false);
  };

  const toggleAddengine = () => {
    setaddengine(!addengine);
    };
  
    const toggleAddpolicy = () => {
      setaddpolicy(!addpolicy);
      };
  
      const toggleAddenginetype = () => {
        setaddenginetype(!addenginetype);
        };

        const toggleshowenginepolicy = () => {
          setDisplayengine(!displayengine);
          
        };

        
  const handleAddNewClickpolicy = () => {
    toggleshowenginepolicy();
    if (!addpolicy) {
      setaddpolicy(true);
    }
  };
  const Scanhowenginess = () => {
    setScanengineshows(!Scanengineshows);
   
  };

  const onAddNewClickScanengine = () => {
    Scanhowenginess();
    if (!addengine) {
      setaddengine(true);
    }
  };
      
  const Scanhowenginetypes = () => {
    setshowtype(!showtype);
   
  };

  const onAddNewClickScanenginetypes = () => {
    Scanhowenginetypes();
    if (!addenginetype) {
      setaddenginetype(true);
    }
  };

  //assets
  const handleAddOwnerClick = () => {
    setAddOwner(!addowner);
    setDisplayOwner(false); 
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleAddNewClick = () => {
    toggleAssetsGroup();
    if (!showForm) {
      setShowForm(true);
    }
  };

  const handleDisplayOwnerClick = () => {
    setDisplayOwner(!displayowner);
    setAddOwner(false); 
  };
  
  const handleAddNewClickOwner = () => {
    handleAddOwnerClick();
    if (!addowner) {
      setAddOwner(true);
    }
  };


//tickets

  const toggletickets = () => {
    setticket(!tickets);
  };

 //Dashboard

  const toggleAssetsGroup = () => {
    setShowAssetsGroup(!showAssetsGroup);
    setShowForm(false);
  };

  const toggleDashb = () => {
    setShowdash(!showdash);
  };
 

 //scan


  const toggleListScan = () => {
    setShowScan(!showScan);
   setShowengine(false);
   // setShowdash(false);
  };

  const handleAddNewClickScan= () => {
    toggleshowengine();
    if (!showScan) {
      setShowScan(true);
    }
  };

  const handleAddNewClickengines= () => {
    toggleshowscan();
    if (!addscan) {
      setaddscan(true);
    }
  };





  const toggleAddScan= () => {
    setaddscan(!addscan);
  };

  const toggleshowscan = () => {
    setaffichescan(!affichescan);
    setaddscan(false);
  };
 

  

  

  const AssetsOwnerMenu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="link" onClick={handleAddOwnerClick} style={{ color: addowner ? "#0A236B" : "gray", fontWeight: addowner ? "bold" : "normal" }}>
          Add
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="link" onClick={handleDisplayOwnerClick} style={{ color: displayowner ? "#0A236B" : "gray", fontWeight: displayowner ? "bold" : "normal" }}>
          Display
        </Button>
      </Menu.Item>
    </Menu>
  );

  
  const assetsMenu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="link" onClick={toggleForm} style={{ color: showForm ? "#0A236B" : "gray", fontWeight: showForm ? "bold" : "normal" }}>
          Add New Assets
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="link" onClick={toggleAssetsGroup} style={{ color: showAssetsGroup ? "#0A236B" : "gray", fontWeight: showAssetsGroup ? "bold" : "normal" }}>
          Assets Group
        </Button>
      </Menu.Item>
      <Dropdown overlay={AssetsOwnerMenu} trigger={['click']}>
  <Button type="link" style={{ color: "gray" }}>
    Assets Owner <DownOutlined />
  </Button>
</Dropdown>
     
    </Menu>
  );
  const workflowMenu = (
    <Menu>
      <Menu.Item key="1">
      <Button type="link" onClick={toggleListScan} style={{ color: showScan ? "#0A236B" : "gray", fontWeight: showScan ? "bold" : "normal" }}>
          Add list engine workflow
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="link" onClick={toggleshowengine} style={{ color: showengine ? "#0A236B" : "gray", fontWeight: showengine ? "bold" : "normal" }}>
          List engine Workflow
        </Button>
        </Menu.Item>
        <Menu.Item key="3">
        <Button type="link" onClick={toggleAddScan} style={{ color: addscan ? "#0A236B" : "gray", fontWeight: addscan ? "bold" : "normal" }}>
          Add new Scan 
        </Button>
        </Menu.Item>
        <Menu.Item key="4">
        <Button type="link" onClick={toggleshowscan} style={{ color: affichescan ? "#0A236B" : "gray", fontWeight: affichescan ? "bold" : "normal" }}>
         Scan defintion
        </Button>
        </Menu.Item>
    </Menu>
  );


  const FindingMenu = (
    <Menu>
      <Menu.Item key="1">
      <Button type="link" onClick={toggleAddFinding} style={{ color: addfinding ? "#0A236B" : "gray", fontWeight: addfinding ? "bold" : "normal" }}>
      <PlusCircleOutlined />  Add Finding
        </Button>
      </Menu.Item>

      <Menu.Item key="2">
      <Button type="link" onClick={toggleManualFinding} style={{ color: manualfinding ? "#0A236B" : "gray", fontWeight: manualfinding ? "bold" : "normal" }}>
       Manual import 
        </Button>
      </Menu.Item>
    
    </Menu>
  );
  
  
  const EngineMenu = (
    <Menu>
      <Menu.Item key="1">
      <Button type="link" onClick={toggleAddengine} style={{ color: addengine ? "#0A236B" : "gray", fontWeight: addengine ? "bold" : "normal" }}>
     Scan engines
        </Button>
      </Menu.Item>

      <Menu.Item key="2">
      <Button type="link" onClick={toggleAddpolicy} style={{ color: addpolicy ? "#0A236B" : "gray", fontWeight: addpolicy ? "bold" : "normal" }}>
      Add policy
        </Button>
      </Menu.Item>

      <Menu.Item key="3">
      <Button type="link" onClick={toggleAddenginetype} style={{ color: addenginetype ? "#0A236B" : "gray", fontWeight: addenginetype ? "bold" : "normal" }}>
      Add engine type
        </Button>
      </Menu.Item>
      <Menu.Item key="4">
      <Button type="link" onClick={toggleshowenginepolicy} style={{ color: displayengine ? "#0A236B" : "gray", fontWeight: displayengine ? "bold" : "normal" }}>
      Scans engine policies
        </Button>
      </Menu.Item>

      <Menu.Item key="5">
      <Button type="link" onClick={Scanhowenginess} style={{ color: Scanengineshows ? "#0A236B" : "gray", fontWeight: Scanengineshows ? "bold" : "normal" }}>
      Scans engine show
        </Button>
      </Menu.Item>

      <Menu.Item key="6">
      <Button type="link" onClick={Scanhowenginetypes} style={{ color: showtype ? "#0A236B" : "gray", fontWeight: showtype ? "bold" : "normal" }}>
      Scans engine type
        </Button>
      </Menu.Item>

    
    </Menu>
  );
  
  const welcomeAnimation = useSpring({
    opacity: isLoggedIn ? 1 : 0, // Fade in if isLoggedIn is true
    transform: isLoggedIn ? "scale(1)" : "scale(0)", // Scale up if isLoggedIn is true
    from: { opacity: 0, transform: "scale(0)" }, // Initial styles
    config: { tension: 200, friction: 12 }, // Animation config
    fontSize:'25px',
    color:'#0A236B',
    textAlign: "center",
  });

  

  return (
    <Layout style={{ minHeight: "120vh", display: "flex", flexDirection: "column" }}>
    
      <Header style={{ background: "#fff", textAlign: "center" }}>
     
     
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div>
    <img src={logo} alt="Logo" width={'69px'} />
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Input
      placeholder="Recherche"
      prefix={<SearchOutlined style={{ fontSize: '16px', color: '#1890ff' }} />}
      style={{
        width: '300px',
        border: 'none',
        borderRadius: '0',
        boxShadow: 'none',
      }}
    />
  </div>
  
  <div>
    {/* Ajouter le bouton de déconnexion uniquement si connecté */}
    {isLoggedIn && (
      <Button type="link" onClick={handleLogout} style={{ color: "#0A236B", fontSize: "20px", textAlign: "end",marginTop:"10px" }}>
        <PoweroffOutlined />Déconnexion
      </Button>
    )}
  </div>
</div>

            <br/>
          <Button type="link" onClick={toggleDashb} style={{ color: showdash ? "#0A236B" : "gray", fontWeight: showdash ? "bold" : "normal" }}> <AppstoreAddOutlined /> Dashboard</Button>

            <Dropdown overlay={assetsMenu} trigger={['click']}>
              <Button type="link" style={{
        color: isBlueasset ? '#0A236B' : 'gray',
       // borderColor: isBlue ? '#0A236B' : 'gray',
      }}
      onClick={handleClickassets}>
              <UnorderedListOutlined /> Assets <DownOutlined />
              </Button>
            </Dropdown>

            
            <Dropdown overlay={workflowMenu}  trigger={['click']}>
              <Button type="link" style={{
        color: isBlueworkflow ? '#0A236B' : 'gray',
       // borderColor: isBlue ? '#0A236B' : 'gray',
      }}
      onClick={handleClickworkflow}>
              <NodeIndexOutlined /> Workflow <DownOutlined />
              </Button>
            </Dropdown>

            

            <Dropdown
          overlay={FindingMenu}
          trigger={['click']}
        >
          <Button type="link"  style={{
        color: isBlue ? '#0A236B' : 'gray',
       // borderColor: isBlue ? '#0A236B' : 'gray',
      }}
      onClick={handleClick}>
            <UpSquareOutlined /> Finding <DownOutlined />
          </Button>
        </Dropdown>

    

        
            <Button type="link" onClick={toggletickets} style={{ color: tickets ? "#0A236B" : "gray", fontWeight: tickets ? "bold" : "normal" }}> <OneToOneOutlined /> Tickets</Button>
            <Dropdown overlay={EngineMenu}  trigger={['click']}>
              <Button type="link" style={{
        color: isBlueEngine ? '#0A236B' : 'gray',
       // borderColor: isBlue ? '#0A236B' : 'gray',
      }}
      onClick={handleClicEngine}>
              <DribbbleOutlined />  Engines <DownOutlined />
              </Button>
            </Dropdown>
        
        
      </Header>
      <br/>
      {isLoggedIn ? (
          // Content to display when the user is logged in
          <animated.div style={welcomeAnimation} className="welcome-message">
        Welcome, user!
      </animated.div>
        ) : (
          // Content to display when the user is not logged in
          <div>Please log in to access this page.</div>
        )}
        
<br/>
      <Content>
 
    
      
        <br/>
        {showForm && <CustomForm />}
        <br/> 
        {addowner && <Addowner/>}
        <br/>
        {displayowner && <Affichageowner  onAddNewClickowner={handleAddNewClickOwner }/>}
        <br/>
        {showAssetsGroup && <Affichage onAddNewClick={handleAddNewClick} />}
        <br/> 
        {showdash && <Dashboard />}
        <br/> 
        {showScan && <ListScan />}
        <br/> 
        {showengine && <Showengine  onAddNewClick={handleAddNewClickScan} />}
        <br/>
        {addscan && <AddScan />}
        <br/>
        {affichescan && <Affichescan   onAddNewClick={ handleAddNewClickengines }/>}
        <br/>
        {showContents.addFinding && <AddFinding />}
        <br/>
        {addfinding && <AddFindingStep2 />}
        <br/>
        {addfinding && <AddFindingStep3 onFinish={handleAddFindingStep3Finish} />}
        <br/>
        {showContents.manualFinding && <ManualFinding />}
        <br/>
        {tickets && <Afficheticks/>}
     
        {addengine && <Addengine/>}
      
        {addpolicy && <Addpolicy/>}
        {addenginetype  && <Addenginetype/>}

        {displayengine && <Scanpolicy onAddNewClickScanpolicy={handleAddNewClickpolicy}/>}
   {Scanengineshows && <EnginessScan  onAddNewClickScanengine  = {onAddNewClickScanengine}/>}
   {showtype && <Scanenginestypes onAddNewClicEnginetype ={onAddNewClickScanenginetypes}/>}
        <br />

        {showSuccessMessage && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            {/* Animation pour le cercle bleu */}
            <animated.img
              src={require("../assets/ok.png")}
              alt="Success"
              style={{ ...blueCircleAnimation, width: '300px', height: '250px',... checkmarkAnimation, fontSize: '30px', color: '#FFF', marginTop: '-100px' }}
            />

  
            

            {/* Le message */}
            <Result
              status="success"
              title={
                <div style={{ fontSize: "35px", color: "#0A236B", fontWeight: "bold", fontFamily: "cursive" }}>
                  Finding Created Successfully
                </div>
              }
              icon={null} // Désactiver l'icône pour éviter l'animation répétée
            />
          </div>
        )}



{!isLoggedIn && (
  
  <script>
  {window.location.href = "/login"} 
</script>

  
)}


       
      </Content>

    </Layout>
    
  );
  
  
};

export default MainLayout;
