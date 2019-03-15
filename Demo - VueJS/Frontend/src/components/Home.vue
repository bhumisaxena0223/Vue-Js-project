<template>
  <div id="home">
    <b-container fluid class="main-home-container padding-left-5 padding-right-5">
      <b-row class="no-margin">
        <b-col class="no-padding">
          <b-row class="no-margin">
            <b-col>
              <b-row>
                <b-col class="shadow m-1 bg-white rounded no-padding scroll">
                  <b-nav pills>
                      <b-nav-item variant="outline-primary" v-b-popover.hover.bottom="material.list" v-for="(material, index) in list_material" :key="`,list-${material,index}`" @click="type(getquerystring(material.list))">
                         {{material.Api}}
                      </b-nav-item>
                  </b-nav>
                  <b-card>
                    <b-tabs pills>
                      <b-tab title="Tab " active id="">
                        
                                Sample data to Show.
                              
                      </b-tab>
                      <b-tab title="Tab " active id="">
                        
                                Sample data to Show.Second tab
                              
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </b-col>
              </b-row>
              <b-row>
               <b-col class="no-scroll">
                 <b-col class="shadow m-1 bg-white rounded" v-if="showcommon" v-b-modal.modal1 lazy>
                    <GChart
                      type="LineChart"
                      :data="chart"
                      :options="chartOptions"
                      style="width: 610; height: 400px;"
                      />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showrebar" v-b-modal.modal2 lazy>
                     <GChart
                      type="LineChart"
                      :data="Rebar"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcarbon" v-b-modal.modal3 lazy>
                   <GChart
                      type="LineChart"
                      :data="Carbon"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showround" v-b-modal.modal4 lazy>
                    <GChart
                      type="LineChart"
                      :data="Round"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcold" v-b-modal.modal5 lazy>
                    <GChart
                      type="LineChart"
                      :data="Cold"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showcolor" v-b-modal.modal6 lazy>
                    <GChart
                      type="LineChart"
                      :data="Color"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showGalvanized" v-b-modal.modal7 lazy>
                    <GChart
                      type="LineChart"
                      :data="Galvanish"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                  <b-col class="shadow m-1 bg-white rounded" v-if="showHRC" v-b-modal.modal8 lazy>
                    <GChart
                      type="LineChart"
                      :data="HRC"
                      :options="chartOptions"
                      style="width: 605; height: 400px;"
                    />
                  </b-col>
                   <b-col class="shadow m-1 bg-white rounded" v-if="showWire" v-b-modal.modal9 lazy>
                    <GChart
                      type="LineChart"
                      :data="Wire"
                      :options="chartOptions"
                      style="width: 605px; height: 400px;"
                    />
                  </b-col>
                </b-col>
              </b-row>
            </b-col>
             <b-col>
              <b-row>
                <b-col class="m-1 bg-white rounded padding right-div">
                    <h5>Headlines</h5>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841688/Steel-All/US-imported-line-pipe-prices-rise-in-face-of-quotas.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Prices for imported welded and seamless line pipe in the United States rose in October because of the timing of Section 232 quotas and anti-dumping actions, according to market participants. Prices for domestic line pipe and oil country tubular goods (OCTG) were little changed, holding steady after three months of declines...</p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841686/Steel-All/US-stainless-scrap-prices-stabilize-for-now.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Stainless steel scrap prices have become fairly stable in the United States, but could show further weakening through year-end and likely into early next year...</p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841684/Steel-All/US-ferrous-scrap-export-prices-up-on-Turkish-sale.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">“The United States' bulk ferrous scrap export price continued to trek upward in a fresh cargo sale to Turkey, while a drop in flows forced East Coast exporters to reverse some recent dock buying price reductions... </p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841685/Steel-All/CME-concludes-12-lot-busheling-futures-sale.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">“CME Group’s Midwest busheling futures contract continues to enjoy activity on a daily basis with a modest 12-lot sale conducted transacted on Tuesday October 30...</p>
                    </div>
                  </b-link> 
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841674/Steel-All/Ternium-seeks-import-market-share-in-Mexico-CEO-says.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Latin American steelmaker Ternium, based in Luxembourg, said it believes it can take back market share held by imports in Mexico, chief executive officer Máximo Vedoya told analysts on Wednesday October 31. The company is expanding a plant there....</p>
                    </div> 
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841469/Steel-All/DAILY-SCRAP-REPORT-Indices-nudge-upward-on-fresh-Baltic-Sea-deal.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Turkish deep-sea scrap import prices remained largely stable after a new transaction was heard on Wednesday October 31...</p>
                    </div> 
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841594/Steel-All/Slab-prices-poised-for-imminent-recovery-Ternium-says.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">“Slab prices are due to recover at any time, with production stoppages expected and an inflationary trend in the prices of raw materials used to make steel, the chief executive officer of Ternium, Máximo Vedoya, told analysts today...</p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841594/Steel-All/Slab-prices-poised-for-imminent-recovery-Ternium-says.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Market participants believe that domestic prices for hot-rolled coil (HRC) in Northern Europe have ‘reached bottom,’ sources told Fastmarkets on Wednesday October 31...</p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841625/Steel-All/EUROPE-HRC-Prices-reach-market-bottom-in-Northern-Europe-sources-say.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">European prices for mesh-quality wire rod were flat across the Northern and Southern parts of the continent on Wednesday October 31, with few buyers seriously enquiring for deliveries... </p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841596/Steel-All/SOUTHERN-EUROPE-REBAR-Prices-slip-as-some-sellers-accept-lower-deals.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">The price for rebar produced and delivered in Southern Europe fell slightly on Wednesday October 31, with some suppliers accepting lower bids to make sales but most only offering higher prices...</p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841506/Steel-All/Turkish-flat-steel-exports-more-than-double-in-September-despite-weak-lira-US-tariffs.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Turkey’s flat steel exports more than doubled year on year in September, up by 103.67%, with total exports in the year to the end of September up by morre than a quarter (27.88%), according to the Turkish Statistical Institute (TUIK)... </p>
                    </div>
                  </b-link>
                  <b-link target="_blank" href="https://www.metalbulletin.com/Article/3841624/Steel-All/EUROPE-BEAMS-Subdued-trading-before-public-holidays-immobilizes-prices.html">
                    <div class="shadow m-1 bg-white rounded padding margin-div">
                      <p class="heading">Domestic prices for steel beams in Europe were stable this week due to slow trading ahead of public holidays on the continent at the end of the week, sources told Fastmarkets on Wednesday October 31....</p>
                    </div>
                  </b-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal1" size="lg" title="Graphs of Zone" lazy>
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Chart" active>
              <GChart
                type="LineChart"
                :data="chartData"
                :options="chartOptions"
                style="width: 605px; height: 330px;"
              />
            </b-tab>
            <b-tab title="Raw Data">
              <b-container>
              <b-row class="space-row">
                <b-col class="table-scroll">
                  <table class="table">
                    <tr>
                      <th>Zone</th>
                      <th>2018/11/27</th>
                      <th>2018/11/26</th>
                      <th>2018/11/23</th>
                      <th>2018/11/22</th>
                      <th>2018/11/21</th>
                      <th>2018/11/20</th>
                      <th>2018/11/19</th>
                      <th>2018/11/16</th>
                      <th>2018/11/15</th>
                      <th>2018/11/14</th>
                      <th>2018/11/13</th>
                      <th>2018/11/12</th>
                    </tr>
                    <tr>
                      <th>APAC</th>
                      <td>3670</td>
                      <td>3450</td>
                      <td>3600</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                    </tr>
                    <tr>
                      <th>NAZ</th>
                      <td>3670</td>
                      <td>3450</td>
                      <td>3600</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                    </tr>
                    <tr>
                      <th>South-Africa</th>
                      <td>3670</td>
                      <td>3450</td>
                      <td>3600</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                    </tr>
                    <tr>
                      <th>Europe</th>
                      <td>3670</td>
                      <td>3450</td>
                      <td>3600</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                      <td>4560</td>
                    </tr>
                  </table>
                </b-col>
              </b-row>
              </b-container>
            </b-tab>
          </b-tabs>
        </b-card>
    </b-modal>
    <b-modal id="modal2" size="lg" title="Graphs of Zone" lazy>
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Chart" active>
              <GChart
                type="LineChart"
                :data="Rebar"
                :options="chartOptions"
                style="width: 605px; height: 400px;"
              />
            </b-tab>
            <b-tab title="Raw Data">
              <b-row class="space-row">
              <b-col class="table-scroll">
                <table class="table">
                  <tr>
                    <th>Zone</th>
                    <th>2018/11/27</th>
                    <th>2018/11/26</th>
                    <th>2018/11/23</th>
                    <th>2018/11/22</th>
                    <th>2018/11/21</th>
                    <th>2018/11/20</th>
                    <th>2018/11/19</th>
                    <th>2018/11/16</th>
                    <th>2018/11/15</th>
                    <th>2018/11/14</th>
                    <th>2018/11/13</th>
                    <th>2018/11/12</th>
                  </tr>
                  <tr>
                    <th>APAC</th>
                    <td>3670</td>
                    <td>3450</td>
                    <td>3600</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                  </tr>
                  <tr>
                    <th>NAZ</th>
                    <td>3670</td>
                    <td>3450</td>
                    <td>3600</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                  </tr>
                  <tr>
                    <th>South-Africa</th>
                    <td>3670</td>
                    <td>3450</td>
                    <td>3600</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                  </tr>
                  <tr>
                    <th>Europe</th>
                    <td>3670</td>
                    <td>3450</td>
                    <td>3600</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                    <td>4560</td>
                  </tr>
                </table>
              </b-col>
            </b-row>
            </b-tab>
          </b-tabs>
        </b-card>
    </b-modal>
    <b-modal id="modal3" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
              type="LineChart"
              :data="Carbon"
              :options="chartOptions"
              style="width: 605px; height: 400px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr>
                  <th>2018/11/27</th>
                  <th>2018/11/26</th>
                  <th>2018/11/23</th>
                  <th>2018/11/22</th>
                  <th>2018/11/21</th>
                  <th>2018/11/20</th>
                  <th>2018/11/19</th>
                  <th>2018/11/16</th>
                  <th>2018/11/15</th>
                  <th>2018/11/14</th>
                  <th>2018/11/13</th>
                  <th>2018/11/12</th>
                </tr>
                <tr>
                  <th>APAC</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>NAZ</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>South-Africa</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>Europe</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card> 
    </b-modal>
    <b-modal id="modal4" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Round"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
             <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr>
                  <th>Zone</th>
                  <th>2018/11/27</th>
                  <th>2018/11/26</th>
                  <th>2018/11/23</th>
                  <th>2018/11/22</th>
                  <th>2018/11/21</th>
                  <th>2018/11/20</th>
                  <th>2018/11/19</th>
                  <th>2018/11/16</th>
                  <th>2018/11/15</th>
                  <th>2018/11/14</th>
                  <th>2018/11/13</th>
                  <th>2018/11/12</th>
                </tr>
                <tr>
                  <th>APAC</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>NAZ</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>South-Africa</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>Europe</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal5" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Cold"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
          <b-col class="table-scroll">
            <table class="table">
              <tr>
                <th>Zone</th>
                <th>2018/11/27</th>
                <th>2018/11/26</th>
                <th>2018/11/23</th>
                <th>2018/11/22</th>
                <th>2018/11/21</th>
                <th>2018/11/20</th>
                <th>2018/11/19</th>
                <th>2018/11/16</th>
                <th>2018/11/15</th>
                <th>2018/11/14</th>
                <th>2018/11/13</th>
                <th>2018/11/12</th>
              </tr>
              <tr>
                <th>APAC</th>
                <td>4220</td>
                <td>4380</td>
                <td>4420</td>
                <td>4570</td>
                <td>4600</td>
                <td>4630</td>
                <td>4650</td>
                <td>4670</td>
                <td>4730</td>
                <td>4770</td>
                <td>4780</td>
                <td>4780</td>
              </tr>
              <tr>
                <th>NAZ</th>
                <td>3670</td>
                <td>3450</td>
                <td>3600</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
              </tr>
              <tr>
                <th>South-Africa</th>
                <td>3670</td>
                <td>3450</td>
                <td>3600</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
              </tr>
              <tr>
                <th>Europe</th>
                <td>3670</td>
                <td>3450</td>
                <td>3600</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
                <td>4560</td>
              </tr>
            </table>
          </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal6" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Color"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
             <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr>
                  <th>2018/11/27</th>
                  <th>2018/11/26</th>
                  <th>2018/11/23</th>
                  <th>2018/11/22</th>
                  <th>2018/11/21</th>
                  <th>2018/11/20</th>
                  <th>2018/11/19</th>
                  <th>2018/11/16</th>
                  <th>2018/11/15</th>
                  <th>2018/11/14</th>
                  <th>2018/11/13</th>
                  <th>2018/11/12</th>
                </tr>
                <tr>
                  <th>APAC</th>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                </tr>
                <tr>
                  <th>NAZ</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                  <td>7500</td>
                </tr>
                <tr>
                  <th>South-Africa</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>Europe</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal7" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="Galvanish"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr>
                  <th>Zone</th>
                  <th>2018/11/27</th>
                  <th>2018/11/26</th>
                  <th>2018/11/23</th>
                  <th>2018/11/22</th>
                  <th>2018/11/21</th>
                  <th>2018/11/20</th>
                  <th>2018/11/19</th>
                  <th>2018/11/16</th>
                  <th>2018/11/15</th>
                  <th>2018/11/14</th>
                  <th>2018/11/13</th>
                  <th>2018/11/12</th>
                </tr>
                <tr>
                  <th>APAC</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>NAZ</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>South-Africa</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>Europe</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal8" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
            <GChart
            type="LineChart"
            :data="HRC"  
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr>
                  <th>Zone</th>
                  <th>2018/11/27</th>
                  <th>2018/11/26</th>
                  <th>2018/11/23</th>
                  <th>2018/11/22</th>
                  <th>2018/11/21</th>
                  <th>2018/11/20</th>
                  <th>2018/11/19</th>
                  <th>2018/11/16</th>
                  <th>2018/11/15</th>
                  <th>2018/11/14</th>
                  <th>2018/11/13</th>
                  <th>2018/11/12</th>
                </tr>
                <tr>
                  <th>APAC</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>NAZ</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>South-Africa</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>Europe</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <b-modal id="modal9" size="lg" title="Graphs of Zone" lazy>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Chart" active>
             <GChart
            type="LineChart"
            :data="Wire"
            :options="chartOptions"
            style="width: 605px; height: 330px;"
          />
          </b-tab>
          <b-tab title="Raw Data">
            <b-row class="space-row">
            <b-col class="table-scroll">
              <table class="table">
                <tr>
                  <th>Zone</th>
                  <th>2018/11/27</th>
                  <th>2018/11/26</th>
                  <th>2018/11/23</th>
                  <th>2018/11/22</th>
                  <th>2018/11/21</th>
                  <th>2018/11/20</th>
                  <th>2018/11/19</th>
                  <th>2018/11/16</th>
                  <th>2018/11/15</th>
                  <th>2018/11/14</th>
                  <th>2018/11/13</th>
                  <th>2018/11/12</th>
                </tr>
                <tr>
                  <th>APAC</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>NAZ</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>South-Africa</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
                <tr>
                  <th>Europe</th>
                  <td>3670</td>
                  <td>3450</td>
                  <td>3600</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                  <td>4560</td>
                </tr>
              </table>
            </b-col>
          </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <router-view></router-view>
  </div>
</template>

<script>
import Materials from '@/modules/material'
export default {
  name: 'Home',
  data () {
    return {
       // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 1000, 400, 900, 300],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['22.11.18', 1030, 540, 350, 600],
        ['21.11.18', 1030, 540, 350, 600],
        ['20.11.18', 1030, 540, 350, 600],
        ['19.11.18', 2030, 540, 350, 600],
        ['18.11.18', 1030, 540, 350, 600],
        ['16.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 3030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],        
        ['15.11.18', 2030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 3030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 2030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 2030, 540, 350, 600],
        ],
       Rebar: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 1000, 400, 900, 300],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['22.11.18', 1030, 540, 350, 900], 
        ['21.11.18', 1030, 540, 350, 600],
        ['20.11.18', 1030, 540, 350, 600],
        ['19.11.18', 1030, 540, 350, 600],
        ['18.11.18', 1030, 540, 350, 600],
        ['16.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],        
      ],
      Carbon: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 3780, 400, 900, 300],
        ['26.11.18', 3840, 460, 250, 688],
        ['23.11.18', 3940, 1120, 300, 899],
        ['22.11.18', 3980, 540, 350, 600],
        ['21.11.18', 4070, 540, 350, 600],
        ['20.11.18', 4070, 540, 350, 600],
        ['19.11.18', 4080, 540, 350, 600],
        ['18.11.18', 4100, 540, 350, 600],
        ['16.11.18', 4100, 540, 350, 600],
        ['15.11.18', 4120, 540, 350, 600],
        ['15.11.18', 4200, 540, 350, 600],        
        ['15.11.18', 4200, 540, 350, 600],        
        ['15.11.18', 4270, 540, 350, 600],        
        ['15.11.18', 4320, 540, 350, 600],        
        ['15.11.18', 4360, 540, 350, 600],
        ['15.11.18', 4360, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ],
        Round: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 5350, 400, 900, 300],
        ['26.11.18', 5350, 460, 250, 688],
        ['23.11.18', 5350, 1120, 300, 899],
        ['22.11.18', 5350, 540, 350, 600],
        ['21.11.18', 5450, 540, 350, 600],
        ['20.11.18', 5450, 540, 350, 600],
        ['19.11.18', 5450, 540, 350, 600],
        ['18.11.18', 5450, 540, 350, 600],
        ['16.11.18', 5450, 540, 350, 600],
        ['15.11.18', 5450, 540, 350, 600],
        ['14.11.18', 5450, 540, 350, 600],        
        ['13.11.18', 5450, 540, 350, 600],        
        ['12.11.18', 5450, 540, 350, 600],        
        ['9.11.18', 5450, 540, 350, 600],        
        ['8.11.18', 5450, 540, 350, 600],
        ['7.11.18', 5450, 540, 350, 600],
        ['6.11.18', 5450, 540, 350, 600],
        ['5.11.18', 5450, 540, 350, 600],
        ['2.11.18', 5450, 540, 350, 600],
        ['1.11.18', 5450, 540, 350, 600],
        ['31.10.18', 5550, 540, 350, 600],
        ['30.10.18', 5550, 540, 350, 600],
        ['29.10.18', 5550, 540, 350, 600]
        ],
        Color: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 5350, 400, 900, 300],
        ['26.11.18', 5350, 460, 250, 688],
        ['23.11.18', 5350, 1120, 300, 899],
        ['22.11.18', 5350, 540, 350, 600],
        ['21.11.18', 5450, 540, 350, 600],
        ['20.11.18', 5450, 540, 350, 600],
        ['19.11.18', 5450, 540, 350, 600],
        ['18.11.18', 5450, 540, 350, 600],
        ['16.11.18', 5450, 540, 350, 600],
        ['15.11.18', 5450, 540, 350, 600],
        ['14.11.18', 5450, 540, 350, 600],        
        ['13.11.18', 5450, 540, 350, 600],        
        ['12.11.18', 5450, 540, 350, 600],        
        ['9.11.18', 5450, 540, 350, 600],        
        ['8.11.18', 5450, 540, 350, 600],
        ['7.11.18', 5450, 540, 350, 600],
        ['6.11.18', 5450, 540, 350, 600],
        ['5.11.18', 5450, 540, 350, 600],
        ['2.11.18', 5450, 540, 350, 600],
        ['1.11.18', 5450, 540, 350, 600],
        ['31.10.18', 5550, 540, 350, 600],
        ['30.10.18', 5550, 540, 350, 600],
        ['29.10.18', 5550, 540, 350, 600]
        ],
        Cold: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 1000, 400, 900, 300],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['22.11.18', 1030, 540, 350, 900], 
        ['21.11.18', 1030, 540, 350, 600],
        ['20.11.18', 1030, 540, 350, 600],
        ['19.11.18', 1030, 540, 350, 600],
        ['18.11.18', 1030, 540, 350, 600],
        ['16.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['26.11.18', 1170, 460, 250, 688],
        ['23.11.18', 660, 1120, 300, 899],
        ['15.11.18', 1030, 540, 350, 600],
        ['15.11.18', 1030, 540, 350, 600],        
        ['15.11.18', 1030, 540, 350, 600],        
      ],
      Galvanish: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 4380, 400, 900, 300],
        ['26.11.18', 4400, 460, 250, 688],
        ['23.11.18', 4460, 1120, 300, 899],
        ['22.11.18', 4500, 540, 350, 900], 
        ['21.11.18', 4540, 540, 350, 600],
        ['20.11.18', 4570, 540, 350, 600],
        ['19.11.18', 4600, 540, 350, 600],
        ['18.11.18', 4600, 540, 350, 600],
        ['16.11.18', 4620, 540, 350, 600],
        ['15.11.18', 4630, 540, 350, 600],
        ['26.11.18', 4680, 460, 250, 688],
        ['23.11.18', 4800, 1120, 300, 899],
        ['26.11.18', 4860, 460, 250, 688],
        ['23.11.18', 4860, 1120, 300, 899],
        ['26.11.18', 4880, 460, 250, 688],
        ['23.11.18', 4900, 1120, 300, 899],
        ['15.11.18', 4930, 540, 350, 600],
        ['15.11.18', 4930, 540, 350, 600],        
        ['15.11.18', 4930, 540, 350, 600],        
      ],
      HRC: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 5350, 400, 900, 300],
        ['26.11.18', 5350, 460, 250, 688],
        ['23.11.18', 5350, 1120, 300, 899],
        ['22.11.18', 5350, 540, 350, 600],
        ['21.11.18', 5450, 540, 350, 600],
        ['20.11.18', 5450, 540, 350, 600],
        ['19.11.18', 5450, 540, 350, 600],
        ['18.11.18', 5450, 540, 350, 600],
        ['16.11.18', 5450, 540, 350, 600],
        ['15.11.18', 5450, 540, 350, 600],
        ['14.11.18', 5450, 540, 350, 600],        
        ['13.11.18', 5450, 540, 350, 600],        
        ['12.11.18', 5450, 540, 350, 600],        
        ['9.11.18', 5450, 540, 350, 600],        
        ['8.11.18', 5450, 540, 350, 600],
        ['7.11.18', 5450, 540, 350, 600],
        ['6.11.18', 5450, 540, 350, 600],
        ['5.11.18', 5450, 540, 350, 600],
        ['2.11.18', 5450, 540, 350, 600],
        ['1.11.18', 5450, 540, 350, 600],
        ['31.10.18', 5550, 540, 350, 600],
        ['30.10.18', 5550, 540, 350, 600],
        ['29.10.18', 5550, 540, 350, 600]
        ],
        Wire: [
        ['Date', 'APAC', 'NAZ', 'South-Africa', 'Europe'],
        ['27.11.18', 4380, 400, 900, 300],
        ['26.11.18', 4400, 460, 250, 688],
        ['23.11.18', 4460, 1120, 300, 899],
        ['22.11.18', 4500, 540, 350, 900], 
        ['21.11.18', 4540, 540, 350, 600],
        ['20.11.18', 4570, 540, 350, 600],
        ['19.11.18', 4600, 540, 350, 600],
        ['18.11.18', 4600, 540, 350, 600],
        ['16.11.18', 4620, 540, 350, 600],
        ['15.11.18', 4630, 540, 350, 600],
        ['26.11.18', 4680, 460, 250, 688],
        ['23.11.18', 4800, 1120, 300, 899],
        ['26.11.18', 4860, 460, 250, 688],
        ['23.11.18', 4860, 1120, 300, 899],
        ['26.11.18', 4880, 460, 250, 688],
        ['23.11.18', 4900, 1120, 300, 899],
        ['15.11.18', 4930, 540, 350, 600],
        ['15.11.18', 4930, 540, 350, 600],        
        ['15.11.18', 4930, 540, 350, 600],        
      ],
      list_material: Materials,
      chartOptions: {
        chart: {
          title: 'Market-Intel',
          subtitle: 'Prices of Zone',
          height: 450
        }
      },
      showcommon: false,
      showrebar: false,
      showcarbon: false,
      showround: false,
      showcold: false,
      showcolor: false,
      showGalvanized: false,
      showHRC: false,
      showWire: false,
      isHidden: true
    }
  },
  methods: {
    type (val) {
      if((val === 'Commom+Carbon+Round+Steel') && (!this.showcommon)){
      this.showcommon = !this.showcommon
      this.showrebar = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
      else if ((val === 'Rebar') && (!this.showrebar)){
      this.showrebar = !this.showrebar
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
      else if ((val === 'Carbon+Structural+Steel') && (!this.showcarbon)) {
        // this.api2(val) 
        this.showcarbon = !this.showcarbon
        this.showround = false;
        this.showrebar = false;
        this.showcold = false;
        this.showcolor = false;
        this.showGalvanized = false;
        this.showWire = false;
        this.showHRC = false;
        this.showcommon = false;
      }
      else if ((val === 'Wire+Rod') && (!this.showWire)) {
        // this.api2(val)
      this.showWire = !this.showWire
      this.showcommon = false;  this.showcarbon = false; this.showround = false;  this.showcold = false;  this.showcolor = false;  this.showGalvanized = false;  this.showrebar = false;  this.showHRC = false;
      }
      else if((val === 'Round+Bearing+Steel') && (!this.showround)) {
      this.showround = !this.showround
      this.showcommon = false;
      this.showcarbon = false;
      this.showcold = false;
      this.showcolor = false;
      this.showrebar = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
      else if ((val === 'Cold+Heading') && (!this.showcold)) {
      this.showcold = !this.showcold
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      this.showrebar = false;
      this.showcolor = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
      else if ((val === 'Color-Coated+Steel') && (!this.showcolor)){
      this.showcolor = !this.showcolor
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showrebar = false;
      this.showGalvanized = false;
      this.showWire = false;
      this.showHRC = false;
      }
      else if((val === 'Galvanized+Steel') && (!this.showGalvanized)) {
      this.showGalvanized = !this.showGalvanized
      this.showcommon = false;
      this.showcarbon = false;
      this.showround = false;
      this.showcold = false;
      this.showrebar = false;
      this.showcolor = false;
      this.showWire = false;
      this.showHRC = false;
      }
      else if ((val === 'HRC+hot-rolled+coil') && (!this.showHRC)) {
      this.showHRC = !this.showHRC  
      this.showcommon = false;  this.showcarbon = false;  this.showround = false;  this.showcold = false; this.showrebar = false;  this.showcolor = false;  this.showGalvanized = false;
      }
      else {}
      this.api2(val)
    },
    getquerystring(material) {
     let material_array = material.split(' ')
     let new_string = material_array.join('+')
    //  console.log(new_string)
     return new_string
   },
    // type () {
    //   this.showcommon = !this.showcommon
    // },
    // type1 () {
    //   this.showrebar = !this.showrebar
    // },
    // type2 () {
    //   this.showcarbon = !this.showcarbon
    // },
    // type3 () {
    //   this.showround = !this.showround
    // },
    // type4 () {
    //   this.showcold = !this.showcold
    // },
    // type5 () {
    //   this.showcolor = !this.showcolor
    // },
    // type6 () {
    //   this.showGalvanized = !this.showGalvanized
    // },
    // type7 () {
    //   this.showHRC = !this.showHRC
    // },
    // type8 () {
    //   this.showWire = !this.showWire
    // }
  }
}
</script>

<style scoped>
  .no-scroll {
    overflow: hidden;
    height: 400px;
  }
  #home {
    text-align: center;
    overflow-y: hidden;
  }
  .list-group-item{
    height: 80px;
    padding-top:30px;
  }
  .scroll{
    font-size: 13px;
    overflow-y: scroll;
    max-width: 100%;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }
  .space-row{
    margin-bottom: 5px;
  }
  table{
    font-size: 12px;
    font-weight: 300;
    padding: 0% !important;
  }
  /* Zone list */
  .list-Zone{
    height: 160px;
    overflow-y: scroll;
  }
  /* APAC list height */
  .list-height{
    height: 40px;
    text-align: left;
    border: none;
    width: 150px;
    padding-right: 15px;
  }
  .table-scroll{
    width: 360px;
    overflow-x: auto;
    height: 160px;
    border: none;
  }
  th, td{
    height: 30px;
    width: 20px;
    padding: 4px;
  }
  .heading{
    font-size: 14px;
    height: 72px;
    text-align: justify;
    overflow: auto;
    font-weight: 300;
  }
  p{
    font-size: 16px;
    font-weight: 500;
    margin:10px;
  }
  .right-div{
    height: 620px;
    overflow-y: scroll;
  }
  h6{
    text-align: left;
  }
  .margin-div{
    margin:20px;
    padding:10px;
  }
  a{
    color:#000;
  }
</style>
