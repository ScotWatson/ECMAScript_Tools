/*
(c) 2024 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use strict";

const initPageTime = performance.now();
import * as Common from "https://scotwatson.github.io/WebInterface/common.mjs";
import * as Interface from "https://scotwatson.github.io/WebInterface/20240316/interface.mjs";
import * as Messaging from "https://scotwatson.github.io/WebInterface/20240316/window-messaging.mjs";
import RemoteProcedureSocket from "https://scotwatson.github.io/WebInterface/RemoteProcedureSocket.mjs";

const windowURL = new URL(window.location);
const subURL = "./index.html#sub";
const subFullURL = new URL(subURL, windowURL);

