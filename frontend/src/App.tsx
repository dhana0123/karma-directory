import './App.css'

function submitForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  alert('Form submission would be handled here');
}

function App() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", width: '100%' }}>
     
<nav>
  <div className="wrap">
    <a href="#" className="nav-logo">Karma-Ego</a>
    <ul className="nav-links">
      <li><a href="#vendors">Vendors</a></li>
      <li><a href="#download">Download</a></li>
      <li><a href="#contribute">Contribute</a></li>
      <li><a href="https://huggingface.co/Karma-ego/global" target="_blank">HuggingFace ↗</a></li>
    </ul>
  </div>
</nav>

<div className="hero">
  <div className="wrap">
    <div className="hero-label">Open Dataset Initiative · CC-BY-4.0</div>
    <h1>Karma-Ego: An Open Egocentric<br />Video Dataset for Physical AI</h1>
    <p>
      A community-driven initiative building the world's largest open egocentric video dataset.
      Free to use, free to contribute. No approval required.
    </p>
    <div className="hero-links">
      <a href="https://huggingface.co/Karma-ego/global" target="_blank">Dataset on HuggingFace ↗</a>
      <a href="https://github.com/Karma-ego/karma-ego" target="_blank">GitHub ↗</a>
      <a href="#download">Download</a>
      <a href="#contribute">Contribute</a>
    </div>
    <div className="hero-stats">
      <div><div className="stat-num">20+</div><div className="stat-label">Hours of data</div></div>
      <div><div className="stat-num">1</div><div className="stat-label">Vendors</div></div>
      <div><div className="stat-num">CC-BY-4.0</div><div className="stat-label">License</div></div>
      <div><div className="stat-num">Free</div><div className="stat-label">Forever</div></div>
    </div>
  </div>
</div>

<section id="about">
  <div className="wrap">
    <h2>About</h2>
    <div className="abstract">
      Karma-Ego is an open community initiative building a large-scale egocentric video dataset
      for physical AI research. Unlike closed datasets that require approval and restrict usage,
      Karma-Ego is fully open under CC-BY-4.0. Vendors contribute data and receive global
      visibility. Researchers and companies download freely with no gatekeeping.
    </div>
    <p>
      Egocentric video — captured from a first-person perspective — is essential for training
      robots, embodied AI systems, and AR/VR applications. Existing datasets are either closed,
      require institutional approval, or are too narrow in scope.
    </p>
    <p>
      Karma-Ego solves this by creating a community where data collection companies contribute
      their existing footage in exchange for global discovery by AI companies and research
      institutions. The dataset grows continuously as more vendors join.
    </p>
  </div>
</section>

<section id="how">
  <div className="wrap">
    <h2>How it works</h2>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div>
          <h3>Vendors contribute data</h3>
          <p>Data collection companies contribute a minimum of 500 hours of egocentric video. Existing open-source footage counts toward this threshold.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div>
          <h3>We validate and list</h3>
          <p>Submissions are reviewed for quality, de-identification, and metadata completeness. Approved vendors are listed on this site with a Validated by Karma badge.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div>
          <h3>Companies search and sample</h3>
          <p>AI companies filter vendors by task, country, device, and fps. They download sample data free and contact vendors directly for custom collection work.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <div>
          <h3>Researchers use freely</h3>
          <p>The full dataset is available on HuggingFace under CC-BY-4.0. No account, no approval, no restrictions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="vendors">
  <div className="wrap">
    <h2>Vendor directory</h2>
    <p>
      Companies listed below have contributed data to Karma-Ego and are available for
      custom or bulk egocentric data collection. Download their sample data from HuggingFace
      and contact them directly for custom work.
    </p>
    <table>
      <thead>
        <tr>
          <th>Vendor</th>
          <th>Country</th>
          <th>Tasks</th>
          <th>Hours</th>
          <th>Device</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Bellu.ai</strong></td>
          <td>India</td>
          <td>Cooking, walking, cleaning</td>
          <td>20</td>
          <td>GoPro Hero 11</td>
          <td><span className="badge">Validated</span></td>
        </tr>
        <tr>
          <td colSpan={6} style={{color:'#aaa',fontSize:'13px',fontStyle:'italic',paddingTop:'16px'}}>
            More vendors coming soon. <a href="#contribute">Apply to contribute →</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="download">
  <div className="wrap">
    <h2>Download</h2>
    <p>
      The dataset is hosted on HuggingFace at
      <a href="https://huggingface.co/Karma-ego/global" target="_blank">Karma-ego/global</a>.
      Download via the CLI or the HuggingFace datasets library.
    </p>

    <p style={{marginTop:'24px',fontWeight:'500',color:'#111'}}>CLI</p>
<div className="code-block"><span className="comment"># Install</span>
pip install karma-ego

<span className="comment"># Download by task</span>
karmaego download --task cooking

<span className="comment"># Download by vendor</span>
karmaego download --vendor Bellu

<span className="comment"># Filter by country</span>
karmaego download --task cooking --country India

<span className="comment"># Metadata only</span>
karmaego download --metadata-only</div>

    <p style={{marginTop:'24px',fontWeight:'500',color:'#111'}}>Python</p>
<div className="code-block">from datasets import load_dataset

ds = load_dataset("Karma-ego/global", streaming=True)
for sample in ds["train"]:
    print(sample["video_uid"], sample["coarse_task"])</div>

    <p style={{marginTop:'24px',fontWeight:'500',color:'#111'}}>Metadata schema</p>
    <table>
      <thead>
        <tr><th>Column</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>video_uid</td><td>Unique video identifier (UUID)</td></tr>
        <tr><td>vendor</td><td>Contributing vendor name</td></tr>
        <tr><td>country</td><td>Country where data was collected</td></tr>
        <tr><td>device</td><td>Camera device used</td></tr>
        <tr><td>duration_sec</td><td>Video duration in seconds</td></tr>
        <tr><td>coarse_task</td><td>High-level task (e.g. cooking)</td></tr>
        <tr><td>fine_task</td><td>Detailed task (e.g. cutting vegetables)</td></tr>
        <tr><td>intake_date</td><td>Date added to dataset</td></tr>
        <tr><td>license</td><td>CC-BY-4.0</td></tr>
        <tr><td>file_name</td><td>Path within HuggingFace repo</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section id="contribute">
  <div className="wrap">
    <h2>Contribute</h2>
    <p>
      If you are a data collection company with egocentric video footage, apply to become
      a Karma-Ego vendor. Contributing is free. In return, your company is listed on this
      site and discoverable by AI companies and research teams worldwide.
    </p>

    <p style={{marginTop:'24px',fontWeight:'500',color:'#111'}}>Requirements</p>
    <ul className="req-list">
      <li>Minimum 500 hours of egocentric video (existing open-source data counts)</li>
      <li>Videos must be de-identified — faces and license plates blurred</li>
      <li>Metadata provided: task labels, country, device, fps</li>
      <li>Data must be licensable under CC-BY-4.0</li>
      <li>Subjects have provided informed consent</li>
    </ul>

    <p style={{marginTop:'32px',fontWeight:'500',color:'#111'}}>Apply</p>
    <form onSubmit={(event) => submitForm(event)} style={{marginTop:'16px'}}>
      <div className="form-row">
        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="e.g. VisionLabs" required />
        </div>
        <div className="form-group">
          <label>Contact email</label>
          <input type="email" placeholder="you@company.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Country</label>
          <input type="text" placeholder="e.g. India" required />
        </div>
        <div className="form-group">
          <label>Estimated hours</label>
          <input type="number" placeholder="e.g. 500" min="1" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Primary task types</label>
          <input type="text" placeholder="e.g. cooking, walking, construction" required />
        </div>
        <div className="form-group">
          <label>Camera device</label>
          <input type="text" placeholder="e.g. GoPro Hero 11" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group full">
          <label>Additional notes</label>
          <textarea placeholder="Any other details about your dataset..."></textarea>
        </div>
      </div>
      <button type="submit" className="submit-btn">Submit application</button>
    </form>
  </div>
</section>

<section id="citation">
  <div className="wrap">
    <h2>Citation</h2>
    <p>If you use Karma-Ego in your research, please cite:</p>
<div className="code-block">{`@dataset{karma-ego-2025,
  title   = {Karma-Ego: An Open Egocentric Video Dataset for Physical AI},
  author  = {Karma-Ego Community},
  year    = {2025},
  license = {CC-BY-4.0},
  url     = {https://huggingface.co/Karma-ego/global}
}`}</div>
  </div>
</section>

<footer>
  <div className="wrap">
    <span>Karma-Ego Initiative · CC-BY-4.0</span>
    <span>
      <a href="https://github.com/Karma-ego/karma-ego" target="_blank">GitHub</a> ·
      <a href="https://huggingface.co/Karma-ego/global" target="_blank">HuggingFace</a> ·
      <a href="https://pypi.org/project/karma-ego" target="_blank">PyPI</a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default App
