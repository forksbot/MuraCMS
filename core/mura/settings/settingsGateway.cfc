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
<cfcomponent extends="mura.baseobject" output="false" hint="This provides site gateway queries">

	<cfset variables.rslists={}>

	<cffunction name="init" output="false">
		<cfargument name="configBean" type="any" required="yes"/>
		<cfset variables.configBean=arguments.configBean />
		<cfreturn this />
	</cffunction>

	<cffunction name="getList" output="false">
		<cfargument name="sortBy" default="orderno">
		<cfargument name="sortDirection" default="asc">
		<cfargument name="cached" default="true" />
		<cfargument name="clearCache" default="false" />
		<cfset var rsSites = "" />

		<cfif arguments.clearCache>
			<cfset variables.rslists={}>
		</cfif>

		<cfif (StructKeyExists(request, 'muraAppreloaded') and isBoolean(request['muraAppreloaded']) && request['muraAppreloaded']) or not StructKeyExists(variables.rslists, 'rsSites#arguments.sortBy##arguments.sortDirection#') or not arguments.cached>
			<cfquery name="rsSites">
				SELECT * FROM tsettings ORDER BY
				<cfif listFindNoCase("domain,site,orderno",arguments.sortBy)>
					#arguments.sortBy#
				<cfelse>
					orderno
				</cfif>
				<cfif listFindNoCase("asc,desc",arguments.sortDirection)>
					#arguments.sortDirection#
				<cfelse>
					asc
				</cfif>
			</cfquery>
			<cfset variables.rslists["rsSites#arguments.sortBy##arguments.sortDirection#"] = rsSites />
		</cfif>

		<cfreturn variables.rslists["rsSites#arguments.sortBy##arguments.sortDirection#"] />
	</cffunction>

</cfcomponent>
