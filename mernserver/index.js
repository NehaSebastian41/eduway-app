const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB configuration
const uri = "mongodb+srv://nehasebastian04:neha41Mongo@cluster0.b59on8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const studygroupCollections = client.db("combineStudy").collection("groups");

    // Insert a group into the database
    app.post("/upload-group", async (req, res) => {
      const data = req.body;
      const result = await studygroupCollections.insertOne(data);
      res.send(result);
    });

    // Update a group
    app.patch("/group/:id", async (req, res) => {
      const id = req.params.id;
      const updateGroupData = req.body;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: 'Invalid ObjectId format' });
      }

      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { ...updateGroupData },
      };
      const options = { upsert: true };

      try {
        const result = await studygroupCollections.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'Failed to update group' });
      }
    });

    // Delete a group
    app.delete("/group/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: 'Invalid ObjectId format' });
      }

      const filter = { _id: new ObjectId(id) };

      try {
        const result = await studygroupCollections.deleteOne(filter);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'Failed to delete group' });
      }
    });

    // Find by department
    app.get("/all-groups", async (req, res) => {
      let query = {};
      if (req.query?.department) {
        query = { department: req.query.department };
      }
      const result = await studygroupCollections.find(query).toArray();
      res.send(result);
    });

    // Get single group data
    app.get("/group/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: 'Invalid ObjectId format' });
      }

      const filter = { _id: new ObjectId(id) };

      try {
        const result = await studygroupCollections.findOne(filter);
        if (!result) {
          return res.status(404).send({ error: 'Group not found' });
        }
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'Failed to fetch group' });
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
