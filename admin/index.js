console.log("this is indexjs")

import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor@123",
    database: "attendance"
})
app.get("/", (req, res) => {
    res.json("hello,this is backend server now in admin")
})
app.post('/create-table', (req, res) => {
    const tableName = req.body.tableName; 
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ?? (
        id INT AUTO_INCREMENT PRIMARY KEY,
        trainername VARCHAR(25) NOT NULL,
        studentname VARCHAR(25) NOT NULL,
        fathername VARCHAR(25) NOT NULL,
        email VARCHAR(50) NOT NULL,
        gender VARCHAR(25) NOT NULL,
        contact VARCHAR(25) NOT NULL,
        education VARCHAR(25) NOT NULL,
        coursename VARCHAR(25) NOT NULL,
        coursetime VARCHAR(25) NOT NULL,
        location VARCHAR(25) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

    db.query(createTableQuery, [tableName], (error, results) => {
        if (error) {
            console.error('Error creating table:', error);
            return res.status(500).json({ error: 'Failed to create table' });
        }
        res.status(200).json({ message: `Table ${tableName} created successfully` });
    });
});
app.get("/trainer", (req, res) => {
    const q = "SELECT * FROM trainer";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.post("/", (req, res) => {

    const q = "SELECT * FROM trainer WHERE `email` = ? AND `password` = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(q, values, (err, data) => {
        if (err) {
            res.send({ error: err })
        }
        if (data.length > 0) {
            res.send(data)
        }
        else {
            res.send({ message: "Incorrect email and password" })
        }
    })
})
app.post("/trainer", (req, res) => {
    const q = "INSERT INTO trainer (`trainername`,`email`,`password`,`contact`,`location`,`course1`,`course2`,`course3`) VALUES (?)"
    const values = [
        req.body.trainername,
        req.body.email,
        req.body.password,
        req.body.contact,
        req.body.location,
        req.body.course1,
        req.body.course2,
        req.body.course3
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("sent")
    })
})

app.delete("/trainer/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM trainer WHERE id=?";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)

    })
})

app.put(`/:tableName/:id/:num`, (req, res) => {
    const studentId = req.params.id;
    const daynum = req.params.num; 
    const { status } = req.body; 
    const tableName = req.params.tableName;
   
    if (!status) {
        return res.status(400).json({ error: 'Status cannot be null or undefined' });
    }

  
    const dayNumInt = parseInt(daynum);
    if (isNaN(dayNumInt) || dayNumInt < 1 ) { // Assuming days are from 1 to 7
        return res.status(400).json({ error: 'Invalid day number' });
    }

    
    db.query(`UPDATE ${tableName} SET day${dayNumInt} = ? WHERE id = ?`, [status, studentId], (error, results) => {
        if (error) {
            console.error(error); 
            return res.status(500).json({ error: 'An error occurred while updating the status' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json({ message: 'Status updated successfully' });
    });
});

app.get("/java", (req, res) => {
    const q = "SELECT * FROM java";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/python", (req, res) => {
    const q = "SELECT * FROM python";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/javascript", (req, res) => {
    const q = "SELECT * FROM javascript";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/mongodb", (req, res) => {
    const q = "SELECT * FROM mongodb";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/postgresql", (req, res) => {
    const q = "SELECT * FROM postgresql";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/mysql", (req, res) => {
    const q = "SELECT * FROM mysql";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/django", (req, res) => {
    const q = "SELECT * FROM django";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/springboot", (req, res) => {
    const q = "SELECT * FROM springboot";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/reactjs", (req, res) => {
    const q = "SELECT * FROM reactjs";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/studentdetails", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    const q = `SELECT * FROM ${tableName} WHERE trainername=? AND coursename=?`;
    db.query(q, [trainerName,courseName],(err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/dayattend", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    const q = `SELECT * FROM ${tableName} WHERE trainername=? AND coursename=?`;
    db.query(q, [trainerName,courseName],(err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.put('/:tableName', (req, res) => {
    const { newcolumn} = req.body;
        const tableName = req.params.tableName;
    if (!newcolumn) {
      return res.status(400).send('Column name is required');
    }
    const alterTableQuery = `ALTER TABLE ${tableName} ADD COLUMN ${newcolumn} VARCHAR(15) NOT NULL`;
  
    db.query(alterTableQuery, [newcolumn], (error, results) => {
      if (error) {
        console.error('Error altering table:', error);
        return res.status(500).send('Error altering table');
      }
  
      console.log('Table altered successfully:', results);
      return res.status(200).json({ message: 'Column added successfully', newcolumn });
    });
  });
const getStudentCount = (trainerName, courseName,tableName, res) => {
    const q = `SELECT COUNT(*) as total FROM ${tableName} WHERE trainername=? AND coursename=?`;
    db.query(q, [trainerName, courseName], (err, data) => {
        if (err) return res.json(err);
        return res.json({ total: data[0].total });
    });
};

app.get("/trainerdashboard/python", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});


app.get("/trainerdashboard/java", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});
app.get("/trainerdashboard/javascript", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});


app.get("/trainerdashboard/reactjs", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});
app.get("/trainerdashboard/springboot", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});


app.get("/trainerdashboard/django", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});


app.get("/trainerdashboard/mongodb", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});
app.get("/trainerdashboard/mysql", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});


app.get("/trainerdashboard/postgresql", (req, res) => {
    const trainerName = req.query.trainername;
    const courseName = req.query.coursename;
    const tableName = req.query.tablename;
    getStudentCount(trainerName, courseName, tableName,res);
});

const insertIntoTable = (tableName) => {
    return (req, res) => {
        const q = `INSERT INTO ${tableName} (trainername, studentname, fathername, email, gender, contact, education, coursename, coursetime, location) VALUES (?)`;
        const values = [
            req.body.trainername,
            req.body.studentname,
            req.body.fathername,
            req.body.email,
            req.body.gender,
            req.body.contact,
            req.body.education,
            req.body.coursename,
            req.body.coursetime,
            req.body.location
        ];
        
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json(`${tableName} entry sent`);
        });
    };
};


app.post("/java", insertIntoTable('java'));
app.post("/python", insertIntoTable('python'));
app.post("/javascript", insertIntoTable('javascript'));
app.post("/reactjs", insertIntoTable('reactjs'));
app.post("/springboot", insertIntoTable('springboot'));
app.post("/django", insertIntoTable('django'));
app.post("/mongodb", insertIntoTable('mongodb'));
app.post("/postgresql", insertIntoTable('postgresql'));
app.post("/mysql", insertIntoTable('mysql'));


app.listen(8080, () => {
    console.log("connected to backend ");

})