<!--- This file is part of Mura CMS.

Mura CMS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, Version 2 of the License.

Mura CMS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Mura CMS. If not, see <http://www.gnu.org/licenses/>.

Linking Mura CMS statically or dynamically with other modules constitutes the preparation of a derivative work based on
Mura CMS. Thus, the terms and conditions of the GNU General Public License version 2 ("GPL") cover the entire combined work.

However, as a special exception, the copyright holders of Mura CMS grant you permission to combine Mura CMS with programs
or libraries that are released under the GNU Lesser General Public License version 2.1.

In addition, as a special exception, the copyright holders of Mura CMS grant you permission to combine Mura CMS with
independent software modules (plugins, themes and bundles), and to distribute these plugins, themes and bundles without
Mura CMS under the license of your choice, provided that you follow these specific guidelines:

Your custom code

• Must not alter any default objects in the Mura CMS database and
• May not alter the default display of the Mura CMS logo within Mura CMS and
• Must not alter any files in the following directories.

	/admin/
	/core/
	/Application.cfc
	/index.cfm

You may copy and distribute Mura CMS with a plug-in, theme or bundle that meets the above guidelines as a combined work
under the terms of GPL for Mura CMS, provided that you include the source code of that other code when and as the GNU GPL
requires distribution of source code.

For clarity, if you create a modified version of Mura CMS, you are not obligated to grant this special exception for your
modified version; it is your choice whether to do so, or to make such modified version available under the GNU General Public License
version 2 without this exception.  You may, if you choose, apply this exception to your own modified versions of Mura CMS.
--->
<cfset tabList=listAppend(tabList,"tabTags")>
<cfoutput>
<div class="mura-panel panel" id="tabTags">
	<div class="mura-panel-heading" role="tab" id="heading-tags">
		<h4 class="mura-panel-title">
			<a class="collapse collapsed" role="button" data-toggle="collapse" data-parent="##content-panels" href="##panel-tags" aria-expanded="false" aria-controls="panel-tags">#application.rbFactory.getKeyValue(session.rb,"sitemanager.content.tabs.tags")#</a>
		</h4>
	</div>
	<div id="panel-tags" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-tags" aria-expanded="false" style="height: 0px;">
		<div class="mura-panel-body">

				<span id="extendset-container-tabtagstop" class="extendset-container"></span>
		   		<div id="tags" class="mura-control justify tagSelector">
					<div class="mura-control-group">
					   	<label>
					   		#application.rbFactory.getKeyValue(session.rb,'sitemanager.content.fields.defaulttags')#
					   	</label>
		  				<input type="text" name="tags">
		  				<cfif len(rc.contentBean.getTags())>
		  					<cfloop list="#rc.contentBean.getTags()#" index="i">
		  						<span class="tag">
		  							#esapiEncode('html',i)# <a><i class="mi-times-circle"></i></a>
		  						  <input name="tags" type="hidden" value="#esapiEncode('html_attr',i)#">
		  						</span>
		  					</cfloop>
		  				</cfif>
					</div> <!--- /.mura-control-group --->
				</div> <!--- /.mura-control .tagSelector --->

				<script>
					$(document).ready(function(){
						$.ajax({
							url: '?muraAction=carch.loadtagarray&siteid=' + siteid,
							dataType: 'text',
							success:function(data){
		                        var tagArray=[];
		                        if(data){
							       tagArray=eval('(' + data + ')');
		                        }
								$('##tags').tagSelector(tagArray, 'tags');
							}
						});
					});
				</script>


				<cfset tagGroupList=$.siteConfig('customTagGroups')>

				<cfif len(tagGroupList)>
				<cfloop list="#tagGroupList#" index="g" delimiters="^,">
				<cfset g=trim(g)>
				<div id="#g#tags" class="mura-control justify tagSelector">
					<div class="mura-control-group">
					   	<label>
					   		#g# #application.rbFactory.getKeyValue(session.rb,'sitemanager.content.fields.tags')#
					   	</label>
						<input type="text" name="#g#tags">
						<cfif len(rc.contentBean.getValue('#g#tags'))>
							<cfloop list="#rc.contentBean.getValue('#g#tags')#" index="i">
								<span class="tag">
									#esapiEncode('html',i)# <a><i class="mi-times-circle"></i></a>
								    <input name="#g#tags" type="hidden" value="#esapiEncode('html_attr',i)#">
								</span>
							</cfloop>
						</cfif>
					</div> <!--- /.mura-control-group --->
				</div> <!--- /.mura-control .tagSelector --->
				<script>
					$(document).ready(function(){
						$.ajax({
							url:'?muraAction=carch.loadtagarray&siteid=' + siteid + '&taggroup=#g#',
							dataType: 'text',
							success: function(data){
								var tagArray=eval('(' + data + ')');
								$('###g#tags').tagSelector(tagArray, '#g#tags');
							}
						});
					});
				</script>
			</cfloop>
				</cfif>

				<span id="extendset-container-tags" class="extendset-container"></span>
				<span id="extendset-container-tabtagsbottom" class="extendset-container"></span>
		</div>
	</div>
</div> 
</cfoutput>